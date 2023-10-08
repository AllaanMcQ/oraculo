import './globals.css'
import { Inter } from 'next/font/google'

import { Navbar, Footer } from "@/components/Layout";


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html className='bg-white text-black dark:bg-gray-900 dark:text-white' lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
       
      
      </body>
    </html>
  )
}
