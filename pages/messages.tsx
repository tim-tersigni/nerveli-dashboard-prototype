import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/layout.module.css'
import Layout from '@/styles/layout'
import Sidebar from '@/components/sidebar'
import dynamic from 'next/dynamic'
import Card from '@/components/card'

const BarChart = dynamic(() => import("@/components/bar-chart"))
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nerveli Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Sidebar/>
        <div className={styles.mainContainer}>
          <div className={styles.sectionHeader}>
            <h1>Messages</h1>
          </div>
        </div>
      </main>
    </Layout>
  )
}
