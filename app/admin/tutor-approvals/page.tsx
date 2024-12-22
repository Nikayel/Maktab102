'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const initialTutorApplications = [
  { id: '1', name: 'Alice Johnson', subject: 'Mathematics' },
  { id: '2', name: 'Bob Williams', subject: 'Physics' },
]

export default function TutorApprovals() {
  const [tutorApplications, setTutorApplications] = useState(initialTutorApplications)

  const handleApprove = (id: string) => {
    // Implement approval logic here
    console.log('Approved tutor:', id)
    setTutorApplications(tutorApplications.filter(tutor => tutor.id !== id))
  }

  const handleReject = (id: string) => {
    // Implement rejection logic here
    console.log('Rejected tutor:', id)
    setTutorApplications(tutorApplications.filter(tutor => tutor.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tutor Applications</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tutorApplications.map((tutor) => (
          <Card key={tutor.id}>
            <CardHeader>
              <CardTitle>{tutor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Subject: {tutor.subject}</p>
              <div className="flex justify-between mt-4">
                <Button onClick={() => handleApprove(tutor.id)}>Approve</Button>
                <Button variant="destructive" onClick={() => handleReject(tutor.id)}>Reject</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

