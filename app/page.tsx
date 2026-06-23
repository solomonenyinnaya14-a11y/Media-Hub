import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex-col items-center justify-center">
      <h1>Post once. Reach everywhere.</h1>
      <p>Media Hub for Nigerian creators</p>
      <div className="space-x-4 mt-8">
        <Link href="/login">Sign In</Link>
        <Link href="/signup">Get Started Free</Link>
      </div>
    </div>
  )
}
