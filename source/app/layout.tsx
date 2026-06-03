import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: '英語レッスン | 日本人のためのパーソナル英語講師',
  description: '日本人学習者のための個別英語レッスン。会話、ビジネス英語、旅行英語など、あなたの目標に合わせた丁寧なサポートで英語力を伸ばします。',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth bg-background">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
