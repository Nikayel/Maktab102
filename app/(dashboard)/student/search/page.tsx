'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const dummyClasses = [
  { id: '1', name: 'Advanced Mathematics', tutor: 'Dr. Smith', time: '14:00' },
  { id: '2', name: 'Introduction to Physics', tutor: 'Prof. Johnson', time: '10:00' },
  { id: '3', name: 'Web Development Basics', tutor: 'Ms. Davis', time: '16:00' },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(dummyClasses)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = dummyClasses.filter(
      (classItem) =>
        classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.tutor.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Search Classes</h1>
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search by class name or tutor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((classItem) => (
          <Card key={classItem.id}>
            <CardHeader>
              <CardTitle>{classItem.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tutor: {classItem.tutor}</p>
              <p>Time: {classItem.time}</p>
              <Button className="mt-2">Enroll</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

