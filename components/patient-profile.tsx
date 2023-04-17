import React, { ReactNode } from "react";
import Card from "./Card";
import styles from "./patient-profile.module.css";

interface Props {
  title: string;
  body: string;
  children?: ReactNode;
}

function PatientProfile() {
  return (
    <Card title="Patient Info" body="information">
      <h1> test</h1>
    </Card>
  );
}

export default PatientProfile;
