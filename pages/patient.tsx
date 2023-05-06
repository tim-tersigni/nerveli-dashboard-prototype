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
import Overview from "@/components/overview";
import clientPromise from "@/lib/mongodb";
import dynamic from "next/dynamic";
//import BarChart from "@/components/bar-chart";

const BarChart = dynamic(() => import("@/components/bar-chart"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Patient({ patients }: any) {
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
            <div className={styles.columns}>
              <PatientProfile patients={patients} />
              <Overview />

              <ActivityList />
            </div>

            <div className={styles.columns}>
              <Card
                title="Pain Management"
                body="Information about potential methods in pain management. "
              >
                <div>
                  <div>
                    <BarChart />
                  </div>
                </div>
                {
                  "Exercises include stretching, applying pressure, going for walks"
                }
              </Card>
              <MedicationList />

              <PhysicalManagementList />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("NerveliData");

    const patients = await db
      .collection("patientinfo")
      .find({})
      .limit(1)
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
