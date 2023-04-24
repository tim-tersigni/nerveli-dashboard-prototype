import clientPromise from "../../lib/mongodb";
import { useState, useEffect } from 'react';


export default async (req:Array<string>, res:any) => {
  try {
      req = ["1", "name"]
      const client = await clientPromise;
      const db = client.db("NerveliData");
      const pi = await db
          .collection("patientinfo")
          .find({patientnum: +req[0]})
          .toArray();
      const pd  = pi[0][req[1]];

      res.send(pd)
  } catch (e) {
      console.error(e);
      throw e;
  }
};

// function returnPatientData(num: number, field:string): String {
//   const [name, setName] = useState("");

//   useEffect(() => {
//     (num, field).then((value) => {
//       setName(value)
//     })
//   }, [])
//   return name;
// }
