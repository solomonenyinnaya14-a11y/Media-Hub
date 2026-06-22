'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` }
    })
    if (error) alert(error.message)
    else router.push('/check-email')
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1>Create Media Hub Account</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-black text-white p-2 w-full">Sign Up</button>
      </form>
    </div>
  )
}
