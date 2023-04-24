import clientPromise from "../../lib/mongodb";
import { useState, useEffect } from 'react';

async function getPatientData(num: number, field: string): Promise<string> {
  try {
      const client = await clientPromise;
      const db = client.db("NerveliData");

      const pi = await db
          .collection("patientinfo")
          .find({patientnum: num})
          .toArray();

      var pd  = pi[0][field];

      return pd;
  } catch (e) {
      console.error(e);
      throw e;
  }
};

function returnPatientData(num: number, field:string): String {
  const [name, setName] = useState("");

  useEffect(() => {
    getPatientData(num, field).then((value) => {
      setName(value)
    })
  }, [])
  return name;
}

export default returnPatientData;