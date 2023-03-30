import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import Sidebar from '@/components/sidebar'
import Icon from '@/components/icon'

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
        <Sidebar 
          icons={[
            <Icon image="../icons/home-icon.svg" alt="Home"/>,
            <Icon image="@/icons/profile-icon.svg" alt="Profile"/>,
            <Icon image="@/icons/chat-icon.svg" alt="Messages"/>,
          ]} 
          bottomIcons={[
            <Icon image="@/icons/gear-icon.svg" alt="Settings"/>
          ]}/>
      </main>
    </Layout>
  )
}
