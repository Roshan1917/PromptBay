export function PostCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg border border-white/10 bg-white/5">
      <div className="aspect-[4/3] bg-neutral-800" />
      <div className="space-y-2.5 p-4">
        <div className="flex gap-1.5"><div className="h-5 w-16 rounded-full bg-neutral-800" /><div className="h-5 w-20 rounded-full bg-neutral-800" /></div>
        <div className="h-5 w-full rounded bg-neutral-800" />
        <div className="h-5 w-3/4 rounded bg-neutral-800" />
        <div className="h-3.5 w-24 rounded bg-neutral-800" />
      </div>
    </div>
  );
}

export function PostGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (<PostCardSkeleton key={i} />))}
    </div>
  );
}
