export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex-col">
      {/* Hero */}
      <div className="flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Post once. <span className="text-purple-500">Reach everywhere.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Media Hub lets Nigerian creators write 1 post → Publish to X + Facebook at same time. 
          No more copy-paste.
        </p>
        
        {/* Email capture */}
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input 
            type="email" 
            placeholder="Enter your email for early access"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border-gray-700 focus:border-purple-500 outline-none"
            required
          />
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
            Join Waitlist
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Free forever for first 100 creators</p>
      </div>
      
      {/* Social proof */}
      <div className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        Built for X + Facebook creators in Nigeria
      </div>
    </main>
  )
}
