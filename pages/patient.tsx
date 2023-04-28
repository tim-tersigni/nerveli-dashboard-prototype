import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import styles from '@/styles/layout.module.css'
import Layout from '@/styles/layout'
import Sidebar from '@/components/sidebar'
import Icon from '@/components/icon'
import Card from '@/components/card'
import ActivityList from '@/components/activity-list'
import clientPromise from "@/lib/mongodb";

const inter = Inter({ subsets: ['latin'] })



export default function Patient({patients}:any) {
  
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
          <div>
            <h1>Testing Patient Info</h1>
            <p>
                <small>(I hope this works)</small>
            </p>
            <ul>
                
            </ul>
        </div>
          <div className={styles.grid}>
            <Card title="Patient Info" body="words">
              {Array.from(patients).map((patient:any) => (
                <li>
                  <h2>Name: {patient.name}</h2>
                  <p>Date of Birth: {patient.date_of_birth}</p>
                  <p>Height: {patient.height} cm</p>
                  <p>Weight: {patient.weight}kg</p>

                </li>
              ))}
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
      return { props: {} }
  }
}
