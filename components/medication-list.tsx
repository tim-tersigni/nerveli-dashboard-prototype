import React, {ReactNode} from "react";
import Card from './card'
import ProgressBar from "./progress-bar";
import styles from './medication-list.module.css'


const medications = [
    {   
        id: "1",
        name: "Adderall",
        dosage: 30,
        frequency: "twice a day",
        numTablets: 1,
        consistency: 75
    },
    {
        id: "2",
        name: "Citalopram",
        dosage: 20,
        frequency: "daily",
        numTablets: 1,
        consistency: 40

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
                    {med.dosage} {" mg "}
                    <p>
                        {med.numTablets} {" tablet(s) "}
                        {med.frequency} 
                    </p>
                    <ProgressBar progress={med.consistency}/>
                </li>
            ))}
      </ul>
        </Card>
    )
}

export default MedicationList;