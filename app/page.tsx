"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Rocket, Calendar, BarChart3, Image as ImageIcon, Users, Smartphone, Check } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      
      {/* NAVBAR WITH LOGO */}
      <nav className="px-6 py-6 max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Media Hub Logo" width={40} height={40} className="rounded-lg" priority />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Media Hub
          </span>
        </div>
        <button className="text-sm bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Login
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Post Once. Reach Everywhere.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect Facebook, Instagram, X, Snapchat in one dashboard. Create content once, publish to ALL platforms with 1 click.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform">
            Start Free Trial
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gray-800 rounded-2xl p-4 border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
            <Image src="/logo.png" alt="Media Hub Dashboard" width={200} height={200} className="opacity-30" />
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon: Rocket, title: "1. Connect Accounts", desc: "Link Facebook, IG, X, Snapchat in 30 seconds"},
            {icon: ImageIcon, title: "2. Create Content", desc: "Upload video, photo, or text in our editor"},
            {icon: Calendar, title: "3. Post Everywhere", desc: "1 click → published on ALL platforms instantly"}
          ].map((step, i) => (
            <motion.div 
              key={i}
              className="bg-gray-800/50 p-8 rounded-2xl border-gray-700 hover:border-purple-500 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <step.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Rocket, title: "1-Click Posting", desc: "Publish to all socials at once"},
            {icon: Calendar, title: "Schedule Posts", desc: "Plan content weeks ahead"},
            {icon: BarChart3, title: "Analytics", desc: "See what content performs best"},
            {icon: ImageIcon, title: "Media Editor", desc: "Crop, resize, add text fast"},
            {icon: Users, title: "Team Collaboration", desc: "Work with your content team"},
            {icon: Smartphone, title: "All Platforms", desc: "FB, IG, X, Snapchat + more"}
          ].map((f, i) => (
            <motion.div 
              key={i}
              className="bg-gray-800/30 p-6 rounded-xl border-gray-700"
              whileHover={{ scale: 1.02 }}
            >
              <f.icon className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {name: "Free", price: "₦0", features: ["2 Social Accounts", "10 Posts/month", "Basic Analytics"]},
            {name: "Creator", price: "₦5,000/mo", features: ["5 Social Accounts", "Unlimited Posts", "Schedule + Analytics", "Media Editor"], popular: true},
            {name: "Pro", price: "₦15,000/mo", features: ["Unlimited Accounts", "Team Members", "Advanced Analytics", "Priority Support"]}
          ].map((tier, i) => (
            <motion.div 
              key={i}
              className={`bg-gray-800/50 p-8 rounded-2xl border ${tier.popular ? 'border-purple-500 scale-105' : 'border-gray-700'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {tier.popular && <div className="text-purple-400 text-sm font-bold mb-2">MOST POPULAR</div>}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">{tier.price}</div>
              {tier.features.map((f, j) => (
                <div key={j} className="flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{f}</span>
                </div>
              ))}
              <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER WITH LOGO */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Media Hub Logo" width={32} height={32} className="rounded" />
            <span className="font-semibold">Media Hub PH</span>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Post Once. Reach Everywhere. | Made in Port Harcourt by Solomon Kelechi | SignalAI | RavenAI | MyStudybuddy
          </p>
        </div>
      </footer>
    </main>
  )
}
