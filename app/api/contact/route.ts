import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validaciones básicas
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    console.log('Recibida solicitud de contacto:', { name, email, company, message: message.substring(0, 50) + '...' })

    // Por ahora, vamos a simular el envío exitoso
    // TODO: Configurar variables de entorno EMAIL_USER y EMAIL_PASS para envío real
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Variables de entorno no configuradas, devolviendo éxito simulado')
      
      // Simular un pequeño delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      return NextResponse.json(
        { 
          message: 'Solicitud recibida - se usará mailto como fallback',
          status: 'fallback'
        },
        { status: 200 }
      )
    }

    console.log('Intentando enviar email con nodemailer...')

    // Configuración del email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'consulta@grovex.com.ar',
      subject: `Consulta desde web - ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2e4a71 0%, #23b0ba 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nueva consulta desde la web</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #2e4a71; border-bottom: 2px solid #23b0ba; padding-bottom: 10px;">
              Información del contacto
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 10px 0;"><strong>Empresa:</strong> ${company}</p>` : ''}
            </div>
            
            <h3 style="color: #2e4a71; margin-top: 30px;">Mensaje:</h3>
            <div style="background: white; padding: 20px; border-left: 4px solid #23b0ba; margin: 10px 0;">
              <p style="line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto de la web de Grovex
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Configuraciones para probar con Zoho (intentará múltiples configuraciones)
    const zohoConfigs = [
      {
        name: 'Zoho STARTTLS (587)',
        config: {
          host: 'smtp.zoho.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false
          }
        }
      },
      {
        name: 'Zoho SSL (465)',
        config: {
          host: 'smtp.zoho.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          }
        }
      }
    ]

    let lastError = null
    
    // Intentar con cada configuración
    for (const { name, config } of zohoConfigs) {
      try {
        console.log(`Probando configuración: ${name}`)
        const transporter = nodemailer.createTransport(config)
        
        // Verificar la conexión
        await transporter.verify()
        console.log(`✓ Conexión exitosa con ${name}`)
        
        // Si llegamos aquí, usar este transportador
        const result = await transporter.sendMail(mailOptions)
        console.log(`✓ Email enviado exitosamente con ${name}:`, result.messageId)

        return NextResponse.json(
          { 
            message: 'Email enviado exitosamente',
            messageId: result.messageId,
            method: name
          },
          { status: 200 }
        )
        
      } catch (error) {
        console.log(`✗ Falló configuración ${name}:`, error instanceof Error ? error.message : error)
        lastError = error
        continue
      }
    }
    
    // Si llegamos aquí, todas las configuraciones fallaron
    throw lastError || new Error('Todas las configuraciones SMTP fallaron')
  } catch (error) {
    console.error('Error detallado enviando email:', error)
    
    // Log más específico del error
    if (error instanceof Error) {
      console.error('Mensaje del error:', error.message)
      console.error('Stack del error:', error.stack)
    }
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}
