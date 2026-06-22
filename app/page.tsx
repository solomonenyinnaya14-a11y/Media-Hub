import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center text-white">
        <h1 className="text-5xl font-bold mb-4">MediaHub</h1>
        <p className="text-xl mb-8">Post once. Reach X + Facebook at same time.</p>
        <div className="space-y-3">
          <Link href="/signup" className="block w-full bg-white text-black p-4 rounded-lg font-bold">
            Get Early Access
          </Link>
          <Link href="/login" className="block w-full border-white p-4 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </main>
  )
}
