'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Plus, LogOut, Pencil, Trash2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Post } from '@/types';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/posts?page=${page}&limit=20`).then((res) => res.json()).then((data) => { setPosts(data.posts || []); setTotalPages(data.pagination?.totalPages || 1); }).catch(() => {}).finally(() => setLoading(false));
  }, [page]);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;
    const res = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    if (res.ok) setPosts((prev) => prev.filter((p) => p.id !== id)); else alert('Failed to delete.');
  }

  async function handleLogout() { await fetch('/api/admin/auth/logout', { method: 'POST' }); router.push('/admin'); }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-bold text-neutral-100">Admin</h1>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/admin/dashboard" className="flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200"><LayoutDashboard className="h-4 w-4" /> Dashboard</Link>
              <Link href="/admin/posts" className="flex items-center gap-1.5 text-primary-400"><FileText className="h-4 w-4" /> Posts</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/posts/new" className="flex items-center gap-1.5 rounded-md bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700"><Plus className="h-3.5 w-3.5" /> New Post</Link>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300"><LogOut className="h-3.5 w-3.5" /> Logout</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-xl font-bold text-neutral-100">All Posts</h2>
        {loading ? (<div className="flex items-center justify-center py-16"><div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-primary-500" /></div>) : posts.length === 0 ? (<p className="text-neutral-400">No posts yet.</p>) : (
          <>
            <div className="overflow-x-auto rounded-lg border border-neutral-800">
              <table className="w-full text-sm">
                <thead className="border-b border-neutral-800 bg-neutral-900/50"><tr><th className="px-4 py-3 text-left font-medium text-neutral-400">Title</th><th className="hidden px-4 py-3 text-left font-medium text-neutral-400 sm:table-cell">Categories</th><th className="hidden px-4 py-3 text-left font-medium text-neutral-400 md:table-cell">Date</th><th className="px-4 py-3 text-right font-medium text-neutral-400">Actions</th></tr></thead>
                <tbody className="divide-y divide-neutral-800/50">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-neutral-900/30">
                      <td className="px-4 py-3"><Link href={`/post/${post.slug}`} className="text-neutral-200 hover:text-primary-400" target="_blank">{post.title}</Link></td>
                      <td className="hidden px-4 py-3 sm:table-cell"><div className="flex flex-wrap gap-1">{post.categories.slice(0, 2).map((c) => (<span key={c.slug} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">{c.name}</span>))}</div></td>
                      <td className="hidden px-4 py-3 text-neutral-500 md:table-cell">{formatDate(post.publishedAt)}</td>
                      <td className="px-4 py-3"><div className="flex items-center justify-end gap-2"><Link href={`/admin/posts/${post.id}`} className="rounded p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200"><Pencil className="h-4 w-4" /></Link><button onClick={() => handleDelete(post.id, post.title)} className="rounded p-1.5 text-neutral-500 hover:bg-red-900/30 hover:text-red-400"><Trash2 className="h-4 w-4" /></button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalPages > 1 && (<div className="mt-4 flex items-center justify-center gap-2"><button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="rounded border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 hover:bg-neutral-900 disabled:opacity-40">Previous</button><span className="text-xs text-neutral-500">Page {page} of {totalPages}</span><button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="rounded border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 hover:bg-neutral-900 disabled:opacity-40">Next</button></div>)}
          </>
        )}
      </main>
    </div>
  );
}
