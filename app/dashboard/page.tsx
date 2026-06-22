'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/login')
      else {
        setUser(user)
        setLoading(false)
      }
    })
  }, [router, supabase.auth])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard 🔥</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 rounded">Logout</button>
        </div>
        <p className="text-gray-400 mb-4">Welcome {user?.email} 👋</p>
        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="text-gray-500">Post composer coming next...</p>
        </div>
      </div>
    </main>
  )
}
