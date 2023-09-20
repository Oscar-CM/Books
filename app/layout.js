import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Book Application',
  description: 'I site to search and find any book',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>


    </html>
  )
}
