import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Theraphy AI',
  description: 'Therapy AI is a mental health and well-being app designed to provide users with a simulated therapy experience. Through our platform, users can book and take appointments with AI-driven therapy agents that replicate the experience of a real therapist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`} >{children}</body>
    </html>
  )
}
