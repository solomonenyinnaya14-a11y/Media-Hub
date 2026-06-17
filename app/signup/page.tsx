export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-lg" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </form>
      </div>
    </main>
  )
}
