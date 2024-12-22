'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/utils/supabase/client'

interface Community {
  id: string
  name: string
  description: string
  isPublic: boolean
}

export default function CommunityPage() {
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    const fetchCommunities = async () => {
      const { data, error } = await supabase
        .from('communities')
        .select('*')
      
      if (error) {
        console.error('Error fetching communities:', error)
      } else {
        setCommunities(data || [])
      }
    }

    fetchCommunities()
  }, [supabase])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Communities</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <Card key={community.id}>
            <CardHeader>
              <CardTitle>{community.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{community.description}</p>
              <p className="mt-2">
                {community.isPublic ? 'Public' : 'Private'} Community
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

