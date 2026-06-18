export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">

        {/* Logo */}
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl font-bold">M</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
          Post Once.<br/>Reach Everywhere.
        </h1>

        {/* Positioning line you asked for */}
        <p className="text-blue-600 font-semibold mb-4">
          Built for Africa Creators
        </p>

        {/* Subheadline */}
        <p className="text-gray-600 mb-8">
          Connect Facebook, Instagram & WhatsApp in one dashboard.
          Create content once, publish to ALL with 1 click.
        </p>

        {/* Platforms - Core 3 + Coming Soon */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">f</div>
            <span className="text-xs mt-1">Facebook</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">IG</div>
            <span className="text-xs mt-1">Instagram</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">WA</div>
            <span className="text-xs mt-1">WhatsApp</span>
          </div>
        </div>

        {/* Coming Soon row */}
        <div className="flex justify-center gap-4 mb-8 opacity-50">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm">X</div>
            <span className="text-[10px] mt-1">Coming Soon</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm">TT</div>
            <span className="text-[10px] mt-1">Coming Soon</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm">SC</div>
            <span className="text-[10px] mt-1">Coming Soon</span>
          </div>
        </div>

        {/* Trust bullets for Africa */}
        <div className="text-left text-sm text-gray-700 mb-8 space-y-2">
          <p>✓ Pay ₦3,000/mo with Transfer, Paga, or Card</p>
          <p>✓ WhatsApp support: We set it up for you</p>
          <p>✓ Best time to post in Africa: 8pm WAT auto-scheduled</p>
        </div>

        {/* CTA */}
        <a href="/dashboard">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-lg hover:bg-blue-700 transition">
            Post to FB + IG Free for 14 Days
          </button>
        </a>

        <p className="text-xs text-gray-500 mt-4">No card needed. Cancel anytime.</p>
      </div>
    </main>
  )
}
