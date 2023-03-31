import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import Sidebar from '@/components/sidebar'
import Icon from '@/components/icon'
import { profile } from 'console'
import Image from 'next/image'

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
        {/* <Image priority src="/images/dog.jpg" alt="a" height={10} width={10}/> */}
        <Sidebar 
            icons={[
              <Icon src='/images/home-icon.svg' alt='Home' width={35} height={35} />,
              <Icon src='/images/profile-icon.svg' alt="Profile" width={35} height={35} />,
              <Icon src='/images/chat-icon.svg' alt="Messages" width={35} height={35} />,
            ]} 
            bottomIcons={[
              <Icon src='/images/gear-icon.svg' alt="Settings" width={35} height={35} />,
            ]}
          />
      </main>
    </Layout>
  )
}
