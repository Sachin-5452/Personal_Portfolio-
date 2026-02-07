import React from "react"
import type { Metadata } from 'next'
import { Sora, IBM_Plex_Mono } from 'next/font/google'

import './globals.css'

const _sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const _ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-ibm-plex-mono' })

export const metadata: Metadata = {
  title: 'Sachin P | Software Developer',
  description: 'Portfolio of Sachin P - Computer Science Engineering student specializing in Python, React, JavaScript, and software development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
