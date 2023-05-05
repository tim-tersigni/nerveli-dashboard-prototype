import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/layout.module.css'
import Layout from '@/styles/layout'
import Sidebar from '@/components/sidebar'
import Card from "@/components/card";
import clientPromise from "@/lib/mongodb";
const inter = Inter({ subsets: ['latin'] })

export default function Home({patients}:any) {
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
            <h1>Home</h1>
          </div>
          <div className={styles.grid}>
            {Array.from(patients).map((patient:any) => (
              <Card
                title={patient.name}
                children={
                  <div className={styles.container}>
                  <div className="item">
                    <span className={styles.bold}> DOB: {patient.date_of_birth}</span>
                  </div>
                  <div className="item">
                    <span className={styles.bold}>Height: {patient.height} </span>
                  </div>
                  <div className="item">
                    <span className={styles.bold}>Weight: {patient.weight} </span>
                  </div>
                </div>
                }
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("NerveliData");

    const patients = await db
      .collection("patientinfo")
      .find({})
      .toArray();

    console.log(patients);

    return {
      props: { patients: JSON.parse(JSON.stringify(patients)) },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
}