import React, { useEffect, useState } from 'react';

import * as FormSection from './FormSection'
import { HeaderCard } from './Card';

import { getCurrentYear } from '../utils/dateUtils';
import * as AppraisalCalc from '../utils/appraisalCalculation'

import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';

const Form = () => {
  
  const year = getCurrentYear()

  const [section, setSection] = useState(1)

  
  const [formData, setFormData] = useState({
    department: "",
    month: "",
    year: year,
    totalMembers: "",
    newMembers: "",
    activities: "",
    traveled: "",
    excoMeetings: "",
    weeklyAttendance: [],
    evangelism: "",
    awarenessInfo: "none",
    departmentChallenges: "none",
    churchCouncilIntervention: "none",
    additionalInfo: "none"
  })
  
  const next = () => setSection((x) => x + 1) //x represents current section
  const previous = () => setSection((x) => x - 1) //x represents current section
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWeeklyAttendanceChange = (e, date) => {
    const { value } = e.target;
    const dateKey= date.toDateString()

    setFormData((x) => {          //x represents state of formData
      const existingIndex = x.weeklyAttendance.findIndex(d => d.date === dateKey)

      if (existingIndex !== -1) {
        const updated = [...x.weeklyAttendance];
        updated[existingIndex].attendance = value;

        return {
          ...x, 
          weeklyAttendance:updated
        };
      } else {
        return {
          ...x, 
          weeklyAttendance: [
            ...x.weeklyAttendance, 
            { date: dateKey, attendance: value }
          ]
        };
      }
    });
  };

  
  const handleClearForm = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: "" });
  };

  const handleWeeklyAttendanceClearForm = () => setFormData({...formData, weeklyAttendance: [] })

  
  const  handleFormSubmit  = async (e) => {
    e.preventDefault();
    const {department, year, ...monthlyAppraisal} = formData

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

      const queryMonth = query(appraisalCollectionRef, where("month", "==", monthlyAppraisal.month)) 
      const queryMonthSnapshot = await getDocs(queryMonth)

      let MonthlyAppraisalDocRef

      if (!queryMonthSnapshot.empty) {
        MonthlyAppraisalDocRef = queryMonthSnapshot.docs[0].ref
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
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])

  return (
    <form onSubmit={handleFormSubmit}>
      {section === 1 && <FormSection.DepartmentInfo formData= {formData} handleChange={handleFormChange} onNextButton={next} onClear={handleClearForm}/>}
      {section === 2 && <FormSection.WeeklyAttendance formData= {formData} handleChange={handleWeeklyAttendanceChange} onNextButton={next} onBackButton={previous} onClear={handleWeeklyAttendanceClearForm}/>}
      {section === 3 && <FormSection.OtherAttendance formData= {formData} handleChange={handleFormChange} onNextButton={next} onBackButton={previous} onClear={handleClearForm}/>}     
      {section === 4 && <FormSection.OtherInfo formData= {formData} handleChange={handleFormChange} onBackButton={previous} onClear={handleClearForm}/>}     
      {section === 5 &&     
        <div 
          style={{
            padding: 16,
            gap: 24,
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
          }}
        >
          {/* <HeaderCard formData= {formData} fieldsVisible= {false} result={true} subtitle={"Your response has been recorded."}/> */}


        </div>
      }
    </form>
  )
}

export default Form