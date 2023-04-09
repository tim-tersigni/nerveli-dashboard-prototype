import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/styles/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Messages() {
  return(
    <Layout>
      <h1>Messages</h1>
    </Layout>

  )
}