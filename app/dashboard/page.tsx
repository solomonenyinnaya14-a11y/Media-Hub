export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

      {/* Connect Accounts */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="font-semibold mb-4">Connect Accounts</h2>
        <p className="text-sm text-gray-500 mb-4">Connected: 0/3 accounts</p>

        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
            Connect Facebook
          </button>
          <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium">
            Connect Instagram
          </button>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium">
            Connect WhatsApp Business
          </button>
        </div>

        {/* Coming Soon section - no popup */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400 mb-2">Coming Soon:</p>
          <div className="flex gap-2 opacity-40">
            <div className="px-3 py-1 bg-gray-200 rounded text-xs">X</div>
            <div className="px-3 py-1 bg-gray-200 rounded text-xs">TikTok</div>
            <div className="px-3 py-1 bg-gray-200 rounded text-xs">Snapchat</div>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold mb-4">Create Post</h2>
        <textarea
          placeholder="Write your post..."
          className="w-full h-32 border rounded-lg p-3 mb-4"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
          Post to All Connected Platforms
        </button>
      </div>
    </main>
  )
}
