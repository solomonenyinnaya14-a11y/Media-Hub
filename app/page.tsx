export default function Waitlist() {
  return (
    <main className="min-h-dvh bg-black text-white px-6 py-12">
      <div className="max-w-md mx-auto w-full flex-col gap-6">

        {/* Headline */}
        <h1 className="text-[36px] leading-[1.1] font-bold tracking-tight">
          Media Hub lets you Post Once. <br/>
          <span className="text-purple-500">Reach Everywhere</span>
        </h1>

        {/* Subtext */}
        <p className="text-zinc-400 text-base leading-relaxed">
          Schedule your posts to Facebook, X, Instagram while you do other stuff.
        </p>

        {/* Offer + Urgency */}
        <div className="space-y-1">
          <p className="text-purple-400 font-semibold text-sm">
            50% discount for first 100 users forever
          </p>
          <p className="text-zinc-500 text-sm">
            Price goes up after. Lock in now.
          </p>
        </div>

        {/* Email + CTA */}
        <form className="space-y-3 pt-2">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full h-12 px-4 rounded-xl bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-purple-600 font-bold text-white active:scale-[0.98] transition">
            Join Waitlist
          </button>
        </form>

        {/* Footer - kills white space */}
        <p className="text-center text-zinc-600 text-xs pt-8">
          Built for X + Facebook + Instagram creators in Nigeria © 2026
        </p>
      </div>
    </main>
  )
}
