import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const cookieStore = await cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options) => cookieStore.set(name, value, options),
        remove: (name: string, options) => cookieStore.set(name, '', options),
      },
    }
  )

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return NextResponse.redirect(`/signup?error=${encodeURIComponent(error.message)}`)
  }

  return NextResponse.redirect('/dashboard')
}
