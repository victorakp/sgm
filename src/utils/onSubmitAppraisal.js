import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';

const  handleFormSubmit  = async (e, data) => {
    e.preventDefault();
    const {department, year, ...monthlyAppraisal} = data

    try {
      const deptCollectionRef = collection(db, "Departments")
      
      const queryDeptName = query(deptCollectionRef, where("name", "==", department)) 
      const queryNameSnapshot = await getDocs(queryDeptName)
     
      let deptDocRef
      
      if (!queryNameSnapshot.empty) {
        deptDocRef = queryNameSnapshot.docs[0].ref
      } else {
        deptDocRef = await addDoc(deptCollectionRef, { name: department });
      }
      
      const appraisalCollectionRef = collection(deptDocRef, "Appraisal") 
      
      const queryYear = query(appraisalCollectionRef, where("year", "==", year)) 
      const queryYearSnapshot = await getDocs(queryYear)
     
      let appraisalDocRef
      
      if (!queryYearSnapshot.empty) {
        appraisalDocRef = queryYearSnapshot.docs[0].ref
        alert("Wevé found a year")
      } else {
        appraisalDocRef = await addDoc(appraisalCollectionRef, { year: year });
      }

      const monthlyAppraisalCollectionRef = collection(appraisalDocRef, "MonthlyAppraisal")

      const queryMonth = query(appraisalCollectionRef, where("month", "==", monthlyAppraisal.month)) 
      const queryMonthSnapshot = await getDocs(queryMonth)

      let MonthlyAppraisalDocRef

      if (!queryMonthSnapshot.empty) {
        MonthlyAppraisalDocRef = queryMonthSnapshot.docs[0].ref
        alert("We've found the month")
      } else {
        MonthlyAppraisalDocRef = await addDoc(monthlyAppraisalCollectionRef, { 
          ...monthlyAppraisal
        });
      }   
      
      console.log("Document written with ID: ");
      alert("Your Submission is successful")
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Submission Error...", e)
    }
};