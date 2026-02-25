'use client';

import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { CopyButton } from '@/components/ui/CopyButton';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { cn } from '@/lib/utils';

interface PromptBlockProps { promptText: string; index: number; defaultExpanded?: boolean; }

export function PromptBlock({ promptText, index, defaultExpanded = false }: PromptBlockProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-slate-800/50">
      <button onClick={() => setExpanded(!expanded)} className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-slate-700" aria-expanded={expanded}>
        <span>Prompt {index + 1}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', expanded && 'rotate-180')} />
      </button>
      {expanded && (
        <div className="border-t border-neutral-200 dark:border-neutral-700">
          <pre className="whitespace-pre-wrap break-words p-4 font-mono text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{promptText}</pre>
          <div className="flex flex-wrap items-center gap-2 border-t border-neutral-200 px-4 py-2.5 dark:border-neutral-700">
            <CopyButton text={promptText} />
            <ShareButtons text={promptText} />
            <div className="ml-auto flex items-center gap-3">
              <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300">Gemini <ExternalLink className="h-3 w-3" /></a>
              <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300">ChatGPT <ExternalLink className="h-3 w-3" /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
