import React, {ReactNode} from "react";
import Card from './card'
import ProgressBar from "./progress-bar";
import styles from './medication-list.module.css'


const medications = [
    {   
        id: "1",
        name: "Acetaminophen\t ",
        dosage: 30,
        frequency: "weekly",
        numTablets: 1,
        remaining: 75,
        consistency: -1.3
    },
    {
        id: "2",
        name: "Citalopram ",
        dosage: 20,
        frequency: "daily",
        numTablets: 1,
        remaining: 40,
        consistency: -1.3

    },
]

function MedicationList() {
    return (
        <Card title="Medication">
        <b>Active Medication</b>
        <ul className={styles.medList}>
            {medications.map((med) => (
                <li key={med.id} className={styles.medication}>
                    <div className={styles.medName}> {med.name}{" "}</div>
                    <p>
                        {med.dosage} {" mg "}
                        {med.numTablets} {" tablet(s) "}
                        {med.frequency} 
                    </p>
                    <ProgressBar progress={med.remaining}/>
                    <div className={styles.percentage}>
                        <p>{med.consistency}{"%"}</p>
                    </div>
                </li>
            ))}
      </ul>
        </Card>
    )
}

export default MedicationList;
