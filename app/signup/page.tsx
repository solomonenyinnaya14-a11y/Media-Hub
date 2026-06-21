'use client'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="max-w-md w-full p-8 rounded-2xl bg-gray-900">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Create Account</h1>
        <form onSubmit={(e) => {e.preventDefault(); router.push('/dashboard')}} className="space-y-4">
          <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-gray-700 focus:border-purple-500 outline-none"/>
          <input type="password" placeholder="Password" required className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-gray-700 focus:border-purple-500 outline-none"/>
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  )
}
