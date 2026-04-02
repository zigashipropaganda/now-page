'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError('wrong password')
    }
  }

  return (
    <div className="min-h-screen bg-[#fef7e8] flex items-center justify-center p-4">
      <div className="bg-[#fffaf2] p-8 rounded-sm shadow-[12px_12px_0_rgba(0,0,0,0.05)] max-w-md w-full">
        <h2 className="text-2xl mb-4">🔒 now admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full p-3 border border-[#d9cdb0] rounded-sm mb-4 bg-white"
          />
          <button type="submit" className="w-full bg-[#2c2a29] text-white p-3 rounded-sm">
            enter
          </button>
          {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
        </form>
      </div>
    </div>
  )
      }
