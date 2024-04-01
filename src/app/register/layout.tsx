'use client'

import Nav from '@/components/Layouts/Nav'

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
