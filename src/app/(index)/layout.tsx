'use client'

import Footer from '@/components/Layouts/Footer'
import Nav from '@/components/Layouts/Nav'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
