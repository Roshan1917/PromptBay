'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps { text: string; className?: string; }

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch { toast.error('Failed to copy.'); }
  };

  return (
    <button onClick={handleCopy} className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${copied ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-slate-700 dark:text-neutral-300 dark:hover:bg-slate-600'} ${className}`} aria-label="Copy to clipboard">
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
