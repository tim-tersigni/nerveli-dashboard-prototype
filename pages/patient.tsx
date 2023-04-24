import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/layout.module.css'
import Layout from '@/styles/layout'
import Sidebar from '@/components/sidebar'
import Icon from '@/components/icon'
import Card from '@/components/card'
import ActivityList from '@/components/activity-list'
import returnPatientData from '@/pages/api/testdata'

const inter = Inter({ subsets: ['latin'] })

export default function Patient() {
  
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
            <h1>Patient Health Summary Dashboard</h1>
          </div>
          <div className={styles.grid}>
            <Card title="Patient Info" body="words">
              {returnPatientData(1, "name")}
            </Card>
            <Card title="Pain Management" body="words">
              {" "}
            </Card>
            <Card title="Overview" body="words">
              {" "}
            </Card>
            <Card title="Medication" body="words">
              {" "}
            </Card>
            <ActivityList/>
            <Card title="Physical Management" body="words">
              {" "}
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  )
}
