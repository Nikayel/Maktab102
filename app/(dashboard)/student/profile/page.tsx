'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProfilePage() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement profile update logic here
    console.log('Profile updated:', { name, email })
    alert('Profile updated successfully!')
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <form onSubmit={handleUpdateProfile}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Update Profile</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

