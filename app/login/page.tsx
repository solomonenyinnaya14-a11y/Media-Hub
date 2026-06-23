'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    
    if (error) alert(error.message)
    else router.push('/settings')
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold">Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} 
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border-gray-800" required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} 
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border-gray-800" required />
        <button disabled={loading} className="w-full py-3 bg-purple-600 rounded-lg font-semibold disabled:opacity-50">
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="text-sm text-gray-400">No account? <a href="/signup" className="text-purple-400">Sign up</a></p>
      </form>
    </div>
  )
}
