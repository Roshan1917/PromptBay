import Link from 'next/link';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (<Link key={link.href} href={link.href} className="text-xs text-neutral-500 transition-colors hover:text-neutral-300">{link.label}</Link>))}
          </div>
          <p className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} Prompt Bay</p>
        </div>
      </div>
    </footer>
  );
}
