import clientPromise from "../../lib/mongodb";


 async function getPatientData(num, field) {
    try {
        const client = await clientPromise;
        const db = client.db("NerveliData");
 
        const pi = await db
            .collection("patientinfo")
            .find({patientnum: num})
            .toArray();
 
        const pd = pi[0][field];

        res.send(pd);
    } catch (e) {
        console.error(e);
    }
 };

 export default getPatientData;