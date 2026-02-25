'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Trash2, Loader2 } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface PostDetail {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featuredImage: string | null;
  prompts: { id: string; promptText: string; orderIndex: number }[];
  images: { id: string; imageUrl: string; altText: string | null; orderIndex: number }[];
  categories: { id: string; name: string; slug: string }[];
}

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [prompts, setPrompts] = useState<{ promptText: string; orderIndex: number }[]>([{ promptText: '', orderIndex: 0 }]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((data) => setCategories(data.categories || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch(`/api/admin/posts/${id}/detail`)
      .then((r) => {
        if (r.status === 401) {
          router.push('/admin');
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (!data?.post) return;
        const post: PostDetail = data.post;
        setTitle(post.title);
        setExcerpt(post.excerpt || '');
        setContent(post.content || '');
        setFeaturedImage(post.featuredImage || '');
        setCategoryIds(post.categories.map((c: Category) => c.id));
        setPrompts(
          post.prompts.length > 0
            ? post.prompts.map((p: { promptText: string; orderIndex: number }) => ({ promptText: p.promptText, orderIndex: p.orderIndex }))
            : [{ promptText: '', orderIndex: 0 }]
        );
      })
      .catch(() => {})
      .finally(() => setLoadingPost(false));
  }, [id, router]);

  function addPrompt() {
    setPrompts((prev) => [...prev, { promptText: '', orderIndex: prev.length }]);
  }

  function removePrompt(index: number) {
    if (prompts.length <= 1) return;
    setPrompts((prev) => prev.filter((_, i) => i !== index).map((p, i) => ({ ...p, orderIndex: i })));
  }

  function updatePrompt(index: number, promptText: string) {
    setPrompts((prev) => prev.map((p, i) => (i === index ? { ...p, promptText } : p)));
  }

  function toggleCategory(catId: string) {
    setCategoryIds((prev) => (prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validPrompts = prompts
      .map((p, i) => ({ promptText: p.promptText.trim(), orderIndex: i }))
      .filter((p) => p.promptText.length >= 10);

    if (validPrompts.length === 0) {
      setError('Add at least one prompt (min 10 characters each).');
      setLoading(false);
      return;
    }

    if (categoryIds.length === 0) {
      setError('Select at least one category.');
      setLoading(false);
      return;
    }

    if (title.trim().length < 5) {
      setError('Title must be at least 5 characters.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          excerpt: excerpt.trim() || undefined,
          content: content.trim() || undefined,
          featuredImage: featuredImage.trim() || undefined,
          categoryIds,
          prompts: validPrompts,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error?.message || 'Failed to update post');
        setLoading(false);
        return;
      }
      router.push('/admin/posts');
    } catch {
      setError('Network error.');
      setLoading(false);
    }
  }

  if (loadingPost) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-primary-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/admin/posts" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200">
            <ArrowLeft className="h-4 w-4" /> Back to Posts
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="mb-6 text-xl font-bold text-neutral-100">Edit Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-300">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              minLength={5}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
              placeholder="Post title"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-300">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              maxLength={300}
              rows={2}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
              placeholder="Brief excerpt"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-300">Content (HTML)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
              placeholder="<p>HTML content...</p>"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-300">Featured Image URL</label>
            <input
              type="url"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-neutral-300">Categories *</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                    categoryIds.includes(cat.id)
                      ? 'border-primary-600 bg-primary-600/20 text-primary-400'
                      : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-neutral-300">Prompts *</label>
              <button
                type="button"
                onClick={addPrompt}
                className="flex items-center gap-1 rounded border border-neutral-800 px-2 py-1 text-xs text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
              >
                <Plus className="h-3 w-3" /> Add
              </button>
            </div>
            <div className="space-y-2">
              {prompts.map((p, i) => (
                <div key={i} className="flex gap-2">
                  <textarea
                    value={p.promptText}
                    onChange={(e) => updatePrompt(i, e.target.value)}
                    required
                    minLength={10}
                    rows={2}
                    className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
                    placeholder="Prompt text (min 10 characters)"
                  />
                  <button
                    type="button"
                    onClick={() => removePrompt(i)}
                    disabled={prompts.length <= 1}
                    className="rounded p-2 text-neutral-500 hover:bg-red-900/30 hover:text-red-400 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-sm font-medium text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <Link
              href="/admin/posts"
              className="rounded-lg border border-neutral-800 px-4 py-3 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
