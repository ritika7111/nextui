import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'AiWave - AI SaaS Platform',
  description: 'Examine the Potential of AI Chatting, AI Writing, AI Hack. Unleash Brainwave\'s AI potential with our powerful conversation app.',
  keywords: ['AI', 'SaaS', 'Artificial Intelligence', 'Chat', 'Writing', 'Code Generation'],
  authors: [{ name: 'AiWave Team' }],
  openGraph: {
    title: 'AiWave - AI SaaS Platform',
    description: 'Unleash Brainwave\'s AI potential with our powerful conversation app.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}