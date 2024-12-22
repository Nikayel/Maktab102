'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function CreateClass() {
  const [className, setClassName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement class creation logic here
    console.log('Class created:', { className, description, date, time })
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create a New Class</CardTitle>
        </CardHeader>
        <form onSubmit={handleCreateClass}>
          <CardContent className="space-y-4">
            <Input
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Create Class</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

