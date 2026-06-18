'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">M</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Post Once. Reach Everywhere.</h1>
          <p className="text-xl text-gray-600 mb-8">Connect Facebook, Instagram, X, Snapchat in one dashboard. Create content once, publish to ALL platforms with 1 click.</p>
          <button 
            onClick={() => window.location.href='/signup'} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition cursor-pointer"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </main>
  )
}
