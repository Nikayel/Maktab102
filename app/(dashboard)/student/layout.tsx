import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/student/dashboard" passHref>
            <Button variant="link" as="a">Dashboard</Button>
          </Link>
          <Link href="/student/courses" passHref>
            <Button variant="link" as="a">Courses</Button>
          </Link>
          <Link href="/student/mentorships" passHref>
            <Button variant="link" as="a">Mentorships</Button>
          </Link>
          <Link href="/student/community" passHref>
            <Button variant="link" as="a">Community</Button>
          </Link>
          <Link href="/student/profile" passHref>
            <Button variant="link" as="a">Profile</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="outline" as="a">Logout</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  )
}

