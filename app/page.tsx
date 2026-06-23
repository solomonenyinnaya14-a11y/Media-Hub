import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Media Hub</h1>
      <p className="text-gray-400 mb-8">Post once. Reach everywhere.</p>
      <div className="space-x-4">
        <Link href="/login" className="px-6 py-3 bg-purple-600 rounded">Sign In</Link>
        <Link href="/signup" className="px-6 py-3 border-purple-600 rounded">Sign Up</Link>
      </div>
    </main>
  )
}
