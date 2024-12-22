import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { UserNav } from '@/components/layout/user-nav'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AfghanGirlsTutor</span>
        </Link>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}

