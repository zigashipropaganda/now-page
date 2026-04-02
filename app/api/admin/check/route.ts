import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const auth = cookies().get('admin_auth')
  
  if (auth?.value === 'true') {
    return NextResponse.json({ authenticated: true })
  }
  
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
