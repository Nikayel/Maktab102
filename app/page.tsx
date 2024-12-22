'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { OrbitControls, useGLTF, Environment, SpotLight } from '@react-three/drei'
import { supabase } from '@/utils/supabase/client'
import { Canvas } from '@react-three/fiber'
import { FeaturedClassCard } from '@/components/cards/featured-class-card'
import { SchoolWaitlist } from '@/components/forms/school-waitlist'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return (
    <Canvas>
      <mesh>{scene}</mesh>
    </Canvas>
  )
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [envCheck, setEnvCheck] = useState<{ supabaseUrl: string, supabaseAnonKey: string } | null>(null)
  const featuredClasses = [
    {
      title: "Yoga for Beginners",
      instructor: "Sarah Johnson",
      image: "/placeholder.svg?height=200&width=400",
      instructorAvatar: "/placeholder.svg?height=40&width=40"
    },
    {
      title: "Python Coding Workshop",
      instructor: "Michael Lee",
      image: "/placeholder.svg?height=200&width=400",
      instructorAvatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
    }
    checkAuth()

    // Check environment variables
    fetch('/api/env-check')
      .then(res => res.json())
      .then(setEnvCheck)
      .catch(console.error)

    // Log client-side environment variables
    console.log('Client Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Client Supabase ANON Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">

      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AfghanGirlsTutor</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering education through online tutoring
        </p>
        <div className="flex justify-center">
          <Link href="/auth/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              AfghanGirlsTutor connects students with mentors and tutors to learn various skills. Our platform offers:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>One-on-one mentorship opportunities</li>
              <li>Access to a wide range of courses</li>
              <li>Engaging community discussions</li>
              <li>Personalized learning experiences</li>
            </ul>
          </div>
          <div className="h-[400px]">
            {/* Temporarily comment out until you have a model
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Model url="/assets/3d/duck.glb" />
              <Environment preset="sunset" background />
            </Canvas>
            */}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Classes & Sessions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClasses.map((classItem, index) => (
            <FeaturedClassCard key={index} {...classItem} />
          ))}
        </div>
      </section>
    </main>
  )
}

