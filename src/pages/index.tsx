import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-black">Hello World - Pagina Home</h1>
  )
}