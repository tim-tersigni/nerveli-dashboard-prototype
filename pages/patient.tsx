import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/layout.module.css";
import Layout from "@/styles/layout";
import Sidebar from "@/components/sidebar";
import PatientProfile from "@/components/patient-profile";
import Card from "@/components/card";
import ActivityList from "@/components/activity-list";
import MedicationList from "@/components/medication-list";
import PhysicalManagementList from "@/components/physical-management";

const inter = Inter({ subsets: ["latin"] });

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
        <Sidebar />
        <div className={styles.mainContainer}>
          <div className={styles.sectionHeader}>
            <h1>Patient Health Summary Dashboard</h1>
          </div>
          <div className={styles.grid}>
            <PatientProfile />
            <Card title="Pain Management" body="words">
              {" "}
            </Card>
            <Card title="Overview" body="words">
              {" "}
            </Card>
            <MedicationList />
            <ActivityList />
            <PhysicalManagementList />
          </div>
        </div>
      </main>
    </Layout>
  );
}
