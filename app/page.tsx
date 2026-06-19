export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl font-bold">M</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Post Once.<br/>Reach Everywhere.</h1>
        <p className="text-blue-600 font-semibold mb-4">Built for Africa Creators</p>
        <p className="text-gray-600 mb-8">Connect Facebook, Instagram & WhatsApp in one dashboard.</p>
        
        <a href="/dashboard">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-lg">
            Post to FB + IG Free for 14 Days
          </button>
        </a>
      </div>
    </main>
  )
}
