export default function Login() {
  return (
    <main className="min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <form action="/auth/signin" method="post" className="space-y-4 w-full max-w-sm">
        <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded bg-gray-800" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-3 rounded bg-gray-800" />
        <button type="submit" className="w-full p-3 bg-purple-600 rounded">Login</button>
      </form>
    </main>
  )
}
