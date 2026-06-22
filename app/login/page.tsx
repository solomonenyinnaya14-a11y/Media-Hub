'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    
    if (error) alert(error.message)
    else router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6">Login to Media Hub</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            required
            className="w-full p-3 border rounded-lg" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            required
            className="w-full p-3 border rounded-lg" 
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          No account? <Link href="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </main>
  )
}
