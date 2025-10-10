import React, { useEffect, useState } from 'react';

import * as FormSection from './FormSection'
import { HeaderCard } from './Card';

import { getCurrentYear } from '../utils/dateUtils';
import { onSubmitAppraisal } from '../utils/onSubmitAppraisal';

const Form = () => {
  
  const year = getCurrentYear()

  const [section, setSection] = useState(1)

  const [loading, setLoading] = useState(false)
  
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

  const [appSummary, setAppSummary] = useState({})
    
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

  const isVisible = ( n ) => ({display: section === n ? "block" : "none"})

  const next = () => {
    const sectionEl = document.querySelector(`[data-section = "${section}"]`)
    if ( !sectionEl ){
      console.warn("No section element found for section =", section)
      return
    }

    const inputs = sectionEl.querySelectorAll("input, select, textarea")

    let allValid = true

    for (let input of inputs){
      if (!input.checkValidity()){
        input.reportValidity()
        allValid = false
        break
      }
    }

    if (allValid){ setSection((x) => x + 1)}      //x represents current section
  } 
  
  const previous = () => setSection((x) => x - 1) //x represents current section

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section])


  return (
    <form onSubmit={(e) => onSubmitAppraisal(e, formData, next, setLoading, setAppSummary)}>
      {section !== 5 ? 
        <>
          {/* SECTION 1 */}
          <div data-section="1" style={isVisible(1)}>
            <FormSection.DepartmentInfo formData= {formData} handleChange={handleFormChange} onNextButton={next} onClear={handleClearForm}/>
          </div>
          
          {/* SECTION 2 */}
          <div data-section="2" style={isVisible(2)}>
            <FormSection.WeeklyAttendance formData= {formData} handleChange={handleWeeklyAttendanceChange} onNextButton={next} onBackButton={previous} onClear={handleWeeklyAttendanceClearForm}/>
          </div>
          
          {/* SECTION 3 */}
          <div data-section="3" style={isVisible(3)}>
            <FormSection.OtherAttendance formData= {formData} handleChange={handleFormChange} onNextButton={next} onBackButton={previous} onClear={handleClearForm}/>    
          </div>
          
          {/* SECTION 4 */}
          <div data-section="4" style={isVisible(4)}>
            <FormSection.OtherInfo formData= {formData} handleChange={handleFormChange} onBackButton={previous} onClear={handleClearForm}/>    
          </div>
        </>

      :

        <>
          {/* SECTION 5 */}  
          <div data-section="5" style={isVisible(5)}>
            <div 
              style={{
                padding: 16,
                gap: 24,
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
              }}
            >
              <HeaderCard formData={appSummary} fieldsVisible= {false} result={true} subtitle={"Your response has been recorded."} loading={loading} />
            </div>
          </div>
        </>
      }
    </form>
  )
}

export default Form