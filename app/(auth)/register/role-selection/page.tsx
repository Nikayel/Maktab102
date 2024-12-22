'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function RoleSelectionPage() {
  const router = useRouter()

  const handleRoleSelection = (role: 'student' | 'tutor') => {
    router.push(`/auth/register?role=${role}`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Choose Your Role</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full" 
            onClick={() => handleRoleSelection('student')}
          >
            Sign up as a Student
          </Button>
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => handleRoleSelection('tutor')}
          >
            Sign up as a Tutor
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

