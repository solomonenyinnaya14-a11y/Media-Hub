'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  async function join(e: React.FormEvent) {
    e.preventDefault()
    setMsg('Saving...')

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }) // <- FIXED: added { }
    })

    setMsg(res.ok ? '✅ You\'re on the list!' : '⚠️ Already joined')
    setEmail('')
  }

  return (
    <main className="min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Media Hub</h1>
        <p className="text-xl text-gray-400 text-xl">Post once.</p>
        <p className="text-gray-500 mt-2 max-w-md">
          Nigerian creators write 1 post → Publish to X + Facebook at once. No more copy-paste.
        </p>
      </div>

      {/* WAITLIST FORM */}
      <form onSubmit={join} className="flex flex-col gap-3 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          className="px-4 py-3 rounded-lg bg-gray-900 border-gray-700 text-white"
        />
        <button type="submit" className="bg-purple-600 py-3 rounded-lg font-bold">
          Join Waitlist
        </button>
      </form>
      <p className="text-center text-sm">{msg}</p>

      <p className="text-xs text-gray-600">Free forever for first 100 creators</p>
      
      {/* KEEP YOUR LOGIN/SIGNUP LINKS */}
      <div className="space-x-4 mt-4">
        <Link href="/login" className="px-6 py-3 bg-purple-600 rounded">Sign In</Link>
        <Link href="/signup" className="px-6 py-3 border-purple-600 rounded">Sign Up</Link>
      </div>
    </main>
  )
}
