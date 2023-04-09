import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/styles/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Settings() {
  return(
  <Layout>
    <h1>Settings</h1>
  </Layout>
  )
}