'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Plus, LogOut, Database } from 'lucide-react';

interface DashboardStats { totalPosts: number; totalCategories: number; scrapedPosts: number; manualPosts: number; lastScrape: { date: string; status: string; postsAdded: number } | null; }

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/dashboard').then((res) => { if (res.status === 401) { router.push('/admin'); return null; } return res.json(); }).then((data) => { if (data) setStats(data.stats); }).catch(() => {}).finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() { await fetch('/api/admin/auth/logout', { method: 'POST' }); router.push('/admin'); }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-bold text-neutral-100">Admin</h1>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/admin/dashboard" className="flex items-center gap-1.5 text-primary-400"><LayoutDashboard className="h-4 w-4" /> Dashboard</Link>
              <Link href="/admin/posts" className="flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200"><FileText className="h-4 w-4" /> Posts</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/posts/new" className="flex items-center gap-1.5 rounded-md bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700"><Plus className="h-3.5 w-3.5" /> New Post</Link>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300"><LogOut className="h-3.5 w-3.5" /> Logout</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-xl font-bold text-neutral-100">Dashboard</h2>
        {loading ? (<div className="flex items-center justify-center py-16"><div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-primary-500" /></div>) : stats ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={<FileText className="h-5 w-5" />} label="Total Posts" value={stats.totalPosts} />
            <StatCard icon={<Database className="h-5 w-5" />} label="Categories" value={stats.totalCategories} />
            <StatCard icon={<FileText className="h-5 w-5" />} label="Scraped" value={stats.scrapedPosts} />
            <StatCard icon={<Plus className="h-5 w-5" />} label="Manual" value={stats.manualPosts} />
          </div>
        ) : (<p className="text-neutral-400">Failed to load stats.</p>)}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (<div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5"><div className="flex items-center gap-3"><div className="text-neutral-500">{icon}</div><div><p className="text-2xl font-bold text-neutral-100">{value}</p><p className="text-xs text-neutral-500">{label}</p></div></div></div>);
}
