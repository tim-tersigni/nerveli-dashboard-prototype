import React, { ReactNode } from "react";
import Card from "./card";
import ProgressBar from "./progress-bar";
import styles from "./physical-management.module.css";

const activity = [
  {
    id: "1",
    name: "Accupuncture",
    consistency: 30,
  },
  {
    id: "2",
    name: "Hiking",
    consistency: 55,
  },
  {
    id: "3",
    name: "Physical Therapy",
    consistency: 70,
  },
  {
    id: "4",
    name: "Meditteranean Diet",
    consistency: 65,
  },
];

const barWidth = 80;

function PhysicalManagementList() {
  return (
    <Card title="Physical Management">
      <b>Weekly Lifestyle Changes</b>
      <ul className={styles.phyList}>
        {activity.map((exercise) => (
          <li key={exercise.id} className={styles.activity}>
            <div className={styles.activityName}> {exercise.name} </div>
            <div className={styles.progressBar}>
              <ProgressBar width={barWidth} progress={exercise.consistency} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default PhysicalManagementList;
