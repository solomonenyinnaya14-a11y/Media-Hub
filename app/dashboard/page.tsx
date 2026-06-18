'use client'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Connect Accounts</h3>
            <div className="space-y-3">
              <button 
                onClick={() => alert('Facebook OAuth coming in V3.1')} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
              >
                Connect Facebook
              </button>
              <button 
                onClick={() => alert('Instagram OAuth coming in V3.1')} 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-3 rounded-lg"
              >
                Connect Instagram
              </button>
              <button 
                onClick={() => alert('X OAuth coming in V3.1')} 
                className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg"
              >
                Connect X
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Create Post</h3>
            <textarea className="w-full border-gray-300 rounded p-3 h-32" placeholder="Write your post..."></textarea>
            <button 
              onClick={() => alert('Post API coming in V3.2')}
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold"
            >
              Post to All Platforms
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
