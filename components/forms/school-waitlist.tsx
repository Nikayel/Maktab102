'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function SchoolWaitlist() {
  const [email, setEmail] = useState('')
  const [schoolName, setSchoolName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist submission
    console.log('Waitlist submission:', { email, schoolName })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Join School Waitlist</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join School Waitlist</DialogTitle>
          <DialogDescription>
            Register your school's interest in our platform.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="school">School Name</Label>
            <Input
              id="school"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Join Waitlist</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

