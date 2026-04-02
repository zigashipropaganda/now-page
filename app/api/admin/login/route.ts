import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// CHANGE THIS PASSWORD TO SOMETHING SECURE
const ADMIN_PASSWORD = 'your-secret-password-here'

export async function POST(request: Request) {
  const { password } = await request.json()
  
  if (password === ADMIN_PASSWORD) {
    cookies().set('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24
    })
    return NextResponse.json({ success: true })
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}
