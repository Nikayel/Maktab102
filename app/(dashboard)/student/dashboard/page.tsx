'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/utils/supabase/client'

interface Community {
  id: string
  name: string
}

interface Meeting {
  id: string
  title: string
  date: string
}

interface Assignment {
  id: string
  title: string
  dueDate: string
}

export default function StudentDashboard() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  // removed: const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      // Fetch communities, meetings, and assignments from Supabase
      // This is a placeholder and should be replaced with actual data fetching
      const { data: communitiesData } = await supabase.from('communities').select('*')
      const { data: meetingsData } = await supabase.from('meetings').select('*')
      const { data: assignmentsData } = await supabase.from('assignments').select('*')

      setCommunities(communitiesData || [])
      setMeetings(meetingsData || [])
      setAssignments(assignmentsData || [])
    }

    fetchData()
  }, [supabase])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {communities.map((community) => (
                <li key={community.id}>{community.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {meetings.map((meeting) => (
                <li key={meeting.id}>{meeting.title} - {meeting.date}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {assignments.map((assignment) => (
                <li key={assignment.id}>{assignment.title} - Due: {assignment.dueDate}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

