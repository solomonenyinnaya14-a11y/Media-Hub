export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Connect Accounts</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">Connect Facebook</button>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-3 rounded-lg">Connect Instagram</button>
              <button className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg">Connect X</button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Create Post</h3>
            <textarea className="w-full border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Write your post..."></textarea>
            <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold">Post to All Platforms</button>
          </div>
        </div>
      </div>
    </main>
  )
}
