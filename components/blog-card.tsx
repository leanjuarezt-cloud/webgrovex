import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
  readTime?: string
}

export function BlogCard({ title, excerpt, author, date, slug, readTime = "5 min" }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-2xl font-bold line-clamp-2 hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <Badge variant="secondary">{readTime} de lectura</Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}

