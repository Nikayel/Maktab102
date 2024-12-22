import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AfghanGirlsTutor',
  description: 'Online tutoring platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

