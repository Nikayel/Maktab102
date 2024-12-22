'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/utils/supabase/client'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<'student' | 'tutor' | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const roleParam = searchParams.get('role') as 'student' | 'tutor' | null
    if (roleParam) {
      setRole(roleParam)
    } else {
      router.push('/auth/register/role-selection')
    }
  }, [searchParams, router])

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    if (!role) {
      alert("Please select a role")
      return
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: role
        }
      }
    })
    if (error) {
      console.error('Error registering:', error.message)
    } else {
      router.push('/auth/login')
    }
  }

  if (!role) {
    return null // or a loading spinner
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</CardTitle>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Register</Button>
            <Link href="/auth/login" passHref>
              <Button variant="outline" as="a">Login</Button>
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

