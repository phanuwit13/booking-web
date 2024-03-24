import Providers from '@/app/providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
