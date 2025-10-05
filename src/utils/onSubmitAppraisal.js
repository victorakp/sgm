import { collection, addDoc, query, where, getDocs, updateDoc } from "firebase/firestore"; 
import { db } from '../firebase';

import { getAppraisalSummary } from "./appraisalCalculation";

const  onSubmitAppraisal  = async (e, data, next, setLoading) => {
  e.preventDefault();

  // setLoading(true)

  const summary = getAppraisalSummary(data)

  const {department, year, ...monthlyAppraisal} = data

  const computedData = {...monthlyAppraisal, AppraisalSummary: [summary]}

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
    } else {
      appraisalDocRef = await addDoc(appraisalCollectionRef, { year: year });
    }

    const monthlyAppraisalCollectionRef = collection(appraisalDocRef, "MonthlyAppraisal")

    const queryMonth = query(monthlyAppraisalCollectionRef, where("month", "==", monthlyAppraisal.month)) 
    const queryMonthSnapshot = await getDocs(queryMonth)

    let MonthlyAppraisalDocRef

    if (!queryMonthSnapshot.empty) {
      MonthlyAppraisalDocRef = queryMonthSnapshot.docs[0].ref
      await updateDoc(MonthlyAppraisalDocRef, {...computedData})
    } else {
      MonthlyAppraisalDocRef = await addDoc(monthlyAppraisalCollectionRef, {...computedData});
    }  
    
    // setLoading(false)
    next()
  } catch (e) {
    console.error("Error adding document: ", e);      
    alert("Submission Error: " + e.message)
  } 
};

export { onSubmitAppraisal }