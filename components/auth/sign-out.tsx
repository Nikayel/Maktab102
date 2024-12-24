'use client'

import { supabase } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export function SignOut() {
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/auth/login')
    }

    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    )
} 