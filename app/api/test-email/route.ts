import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  console.log('=== DIAGNÓSTICO DE EMAIL ===')
  
  try {
    // Verificar variables de entorno
    console.log('Variables de entorno:')
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ Configurado' : '✗ No configurado')
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Configurado' : '✗ No configurado')
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        success: false,
        error: 'Variables de entorno no configuradas',
        details: {
          EMAIL_USER: !!process.env.EMAIL_USER,
          EMAIL_PASS: !!process.env.EMAIL_PASS
        }
      })
    }

    // Configuración para Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Para logs detallados
      logger: true
    })

    console.log('Intentando verificar conexión SMTP...')
    
    // Verificar la conexión
    await transporter.verify()
    console.log('✓ Conexión SMTP exitosa!')

    // Enviar email de prueba
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'consulta@grovex.com.ar',
      subject: 'Prueba de conexión SMTP - Grovex',
      html: `
        <h2>🧪 Prueba de conexión exitosa</h2>
        <p>Este es un email de prueba para verificar que la conexión SMTP con Zoho funciona correctamente.</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-AR')}</p>
        <p><strong>Servidor:</strong> Desarrollo local</p>
      `
    }

    console.log('Enviando email de prueba...')
    const result = await transporter.sendMail(mailOptions)
    
    console.log('✓ Email enviado exitosamente!')
    console.log('Message ID:', result.messageId)

    return NextResponse.json({
      success: true,
      message: 'Email de prueba enviado exitosamente',
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('✗ Error en la prueba de email:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Error en la prueba de email',
      details: error instanceof Error ? error.message : 'Error desconocido',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}
