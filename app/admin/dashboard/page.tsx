'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Entry = { category: string; text: string }

export default function AdminDashboard() {
  const [entries, setEntries] = useState<Entry[]>([
    { category: '🎧 MUSIC', text: 'Your current obsession here' },
    { category: '📺 SHOW', text: 'What you are watching' },
    { category: '📖 WORD', text: 'A word stuck in your brain' }
  ])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetch('/api/admin/check').then(res => {
      if (!res.ok) router.push('/admin')
    })
  }, [])

  const addEntry = () => {
    setEntries([...entries, { category: '', text: '' }])
  }

  const updateEntry = (idx: number, field: keyof Entry, value: string) => {
    const updated = [...entries]
    updated[idx][field] = value
    setEntries(updated)
  }

  const removeEntry = (idx: number) => {
    setEntries(entries.filter((_, i) => i !== idx))
  }

  const saveSnapshot = async () => {
    setSaving(true)
    const res = await fetch('/api/admin/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entries })
    })
    if (res.ok) {
      setMessage('Saved. Old snapshot archived.')
      setTimeout(() => setMessage(''), 3000)
    }
    setSaving(false)
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-[#fef7e8] p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#fffaf2] p-6 md:p-8 rounded-sm shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl">now admin</h2>
            <button onClick={logout} className="text-sm text-gray-500">logout</button>
          </div>

          {message && (
            <div className="bg-green-100 text-green-700 p-3 rounded-sm mb-4">{message}</div>
          )}

          <div className="space-y-4">
            {entries.map((entry, idx) => (
              <div key={idx} className="border-l-4 border-[#e85d4f] bg-[#faf7f0] p-4">
                <input
                  type="text"
                  value={entry.category}
                  onChange={(e) => updateEntry(idx, 'category', e.target.value)}
                  placeholder="category"
                  className="w-full p-2 mb-2 border border-[#d9cdb0] rounded-sm bg-white"
                />
                <textarea
                  value={entry.text}
                  onChange={(e) => updateEntry(idx, 'text', e.target.value)}
                  placeholder="what's in your brain right now"
                  rows={3}
                  className="w-full p-2 mb-2 border border-[#d9cdb0] rounded-sm bg-white"
                />
                <button onClick={() => removeEntry(idx)} className="text-sm text-gray-500">
                  remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={addEntry} className="px-4 py-2 border border-[#2c2a29] rounded-sm">
              + add entry
            </button>
            <button onClick={saveSnapshot} disabled={saving} className="px-6 py-2 bg-[#e85d4f] text-white rounded-sm">
              {saving ? 'saving...' : 'save as current now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
    }
