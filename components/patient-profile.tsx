import React, { ReactNode } from "react";
import Card from "./Card";
import styles from "/Users/Lisa/Downloads/0 UTD/Nervali Dashboard/nerveli-dashboard-prototype/components/patient-profle.module.css";

interface Props {
  title: string;
  body: string;
  children?: ReactNode;
}

function PatientProfile() {
  return (
    <Card>
      <div className={styles.container3}>
        <div className={styles.headergrid}>
          <h2 className={styles.h2}>Patient Info</h2>
          <button className={styles.button}>See All</button>
        </div>
        <div className={styles.container2}>
          <div className={styles.pfp}>
            <img
              className={styles.image}
              src="/images/patientPfp.jpeg"
              alt="User Profile Picture"
              height={75}
            />
          </div>
          <div className={styles.container3}>
            <h3 className={styles.h3}>Firstname Lastname</h3>
            <div className={styles.container}>
              <div className="item">
                <span className={styles.bold}>Age: </span>
              </div>
              <div className="item">
                <span className={styles.bold}>DOB: </span>
              </div>
              <div className="item">
                <span className={styles.bold}>Sex: </span>
              </div>
              <div className="item">
                <span className={styles.bold}>Height: </span>
              </div>
              <div className="item">
                <span className={styles.bold}>Weight: </span>
              </div>
            </div>
          </div>
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
