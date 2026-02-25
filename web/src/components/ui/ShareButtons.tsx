'use client';

import { getWhatsAppShareUrl, getTelegramShareUrl } from '@/lib/utils';

interface ShareButtonsProps { text: string; }

export function ShareButtons({ text }: ShareButtonsProps) {
  return (
    <div className="flex items-center gap-1.5">
      <a href={getWhatsAppShareUrl(text)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-green-700 transition-colors hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20" aria-label="Share on WhatsApp">WhatsApp</a>
      <a href={getTelegramShareUrl(text)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20" aria-label="Share on Telegram">Telegram</a>
    </div>
  );
}
