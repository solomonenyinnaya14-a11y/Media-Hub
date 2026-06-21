export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats cards - empty for now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-xl border-gray-800">
            <p className="text-gray-400 text-sm">Total Posts</p>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">X Followers</p>
            <p className="text-3xl font-bold mt-2">--</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border-gray-800">
            <p className="text-gray-400 text-sm">Referrals</p>
            <p className="text-3xl font-bold mt-2">0/5</p>
          </div>
        </div>
        
        {/* Empty state */}
        <div className="bg-gray-900 p-12 rounded-xl border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-4">No posts yet</h2>
          <p className="text-gray-400 mb-6">Connect X + Facebook, then create your first post</p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
            Create First Post
          </button>
        </div>
      </div>
    </main>
  )
}
