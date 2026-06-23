import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Post once. Reach everywhere.</h1>
      <p className="text-gray-400 mb-8">Media Hub for Nigerian creators</p>
      <div className="space-x-4">
        <Link href="/login" className="px-6 py-3 bg-purple-600 rounded">Sign In</Link>
        <Link href="/signup" className="px-6 py-3 border-purple-600 rounded">Get Started Free</Link>
      </div>
    </main>
  )
}
