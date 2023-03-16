import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout className={"w-full h-screen"}>
      <h1 className="text-primary">Hello World!</h1>
    </Layout>
  )
}