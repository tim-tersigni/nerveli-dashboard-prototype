import React, { ReactNode } from "react";
import Card from "./card";
import styles from "./overview.module.css";

const symptoms = [
  {
    id: "1",
    name: "Exercises Daily",
    severity: "low",
  },
  {
    id: "2",
    name: "Healthy Diet",
    severity: "low",
  },
  {
    id: "3",
    name: "Long Hours At Desk",
    severity: "medium",
  },
  {
    id: "4",
    name: "Lack of Sleep",
    severity: "medium",
  },
  {
    id: "5",
    name: "High stress",
    severity: "high",
  },
  {
    id: "6",
    name: "Lower Back Pain",
    severity: "high",
  },
];

function Chip({ id, name, severity }) {
  let color;

  switch (severity) {
    case "low":
      color = "#52cc7a";
      break;
    case "medium":
      color = "#ffd146";
      break;
    case "high":
      color = "#fe725d";
      break;
    default:
      color = "gray";
      break;
  }

  return (
    <div className={styles.chip} style={{ backgroundColor: color }}>
      <span className={styles.text}>{name}</span>
    </div>
  );
}

function Overview() {
  return (
    <Card title="Overview" body="Overview of Patient Information">
      <ul className={styles.flex}>
        {symptoms.map((symptoms) => (
          <li key={symptoms.id}>
            <div className={styles.chip}>
              <Chip
                id={symptoms.id}
                name={symptoms.name}
                severity={symptoms.severity}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Overview;
