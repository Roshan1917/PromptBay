export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getWhatsAppShareUrl(text: string): string {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function getTelegramShareUrl(text: string): string {
  return `https://t.me/share/url?url=&text=${encodeURIComponent(text)}`;
}
