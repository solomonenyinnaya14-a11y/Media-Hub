import { supabase } from '@/lib/supabase'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action="/auth/signin" method="post" className="space-y-4">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
