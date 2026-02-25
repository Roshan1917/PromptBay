import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

export const metadata: Metadata = {
  title: { default: 'Prompt Bay - Trending AI Photo Editing Prompts', template: '%s | Prompt Bay' },
  icons: { icon: '/icon.svg' },
  description: 'Find the latest trending AI photo editing prompts for Gemini, ChatGPT, and Midjourney.',
  keywords: ['AI prompts', 'Gemini prompts', 'ChatGPT prompts', 'photo editing prompts'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-black font-sans text-neutral-100 antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
