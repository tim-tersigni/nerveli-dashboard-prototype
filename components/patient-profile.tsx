import React, { ReactNode } from "react";
import Card from "./card";
import styles from "./patient-profle.module.css";

interface Props {
   title: string;
   body: string;
   children?: ReactNode;
 }

function PatientProfile({patients}:any) {
  return (
    <Card title="">
      <div className={styles.container3}>
        <div className={styles.headergrid}>
          <h2 className={styles.h2}>Patient Info</h2>
          <button className={styles.button}>See All</button>
        </div>
        <div className={styles.container2}>
          <div className={styles.pfp}>
            <img
              className={styles.image}
              src="./images/patientPfp.jpeg"
              alt="User Profile Picture"
              height={75}
            />
          </div>
          {Array.from(patients).map((patient:any) => (
            <div className={styles.container3}>
              <h3 className={styles.h3}>{patient.name}</h3>
              <div className={styles.container}>
                <div className="item">
                  <span className={styles.bold}>Age: </span>
                </div>
                <div className="item">
                  <span className={styles.bold}> DOB: {patient.date_of_birth}</span>
                </div>
                <div className="item">
                  <span className={styles.bold}>Sex: </span>
                </div>
                <div className="item">
                  <span className={styles.bold}>Height: {patient.height} </span>
                </div>
                <div className="item">
                  <span className={styles.bold}>Weight: {patient.weight} </span>
                </div>
              </div>
          </div>
          ))}
        </div>
        <div className={styles.container4}>
          <div className="item">
            <span className={styles.bold}>Diagnosis:</span>
            <br></br>Temperature Sensitivity
          </div>
          <div className="item">
            <span className={styles.bold}>Notes:</span>
            <br></br>Dull pain in lower back
          </div>
        </div>
      </div>
    </Card>
  );
}


export default PatientProfile;
