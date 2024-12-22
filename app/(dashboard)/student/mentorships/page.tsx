'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/utils/supabase/client'

interface Mentor {
  id: string
  name: string
  expertise: string
}

export default function MentorshipsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([])
  //const supabase = createClient()

  useEffect(() => {
    const fetchMentors = async () => {
      const { data, error } = await supabase
        .from('mentors')
        .select('*')
        .eq('approved', true)
      
      if (error) {
        console.error('Error fetching mentors:', error)
      } else {
        setMentors(data || [])
      }
    }

    fetchMentors()
  }, [supabase])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mentorships</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <CardHeader>
              <CardTitle>{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Expertise: {mentor.expertise}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

