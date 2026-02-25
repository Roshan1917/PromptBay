'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      const res = await fetch('/api/admin/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      if (res.ok) { router.push('/admin/dashboard'); } else { const data = await res.json(); setError(data.error?.message || 'Login failed'); }
    } catch { setError('Network error.'); } finally { setLoading(false); }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-neutral-800"><Lock className="h-5 w-5 text-neutral-400" /></div>
          <h1 className="text-xl font-bold text-neutral-100">Admin Access</h1>
          <p className="mt-1 text-sm text-neutral-500">Enter password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoFocus required className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600" />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button type="submit" disabled={loading || !password} className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null} {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
