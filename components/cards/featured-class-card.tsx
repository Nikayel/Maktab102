import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface FeaturedClassProps {
  title: string
  instructor: string
  image: string
  instructorAvatar: string
}

export function FeaturedClassCard({ title, instructor, image, instructorAvatar }: FeaturedClassProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={instructorAvatar} />
            <AvatarFallback>{instructor[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">by {instructor}</span>
        </div>
      </CardContent>
    </Card>
  )
}

