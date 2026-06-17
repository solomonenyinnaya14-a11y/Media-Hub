'use client'

import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>
        <form onSubmit={(e) => {e.preventDefault(); router.push('/dashboard')}} className="space-y-4">
          <input type="email" placeholder="Email" required className="w-full px-4 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="password" placeholder="Password" required className="w-full px-4 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </form>
      </div>
    </main>
  )
}
