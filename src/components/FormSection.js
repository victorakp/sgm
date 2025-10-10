import React from 'react'

import { HeaderCard } from "./Card";

import * as DateUtils from "../utils/dateUtils"

import FormQuestions from './FormQuestions';
import FormButtons from './FormButtons';

const DepartmentInfo = ({formData, handleChange, onNextButton}) => {
    return (
        <div 
            style={{
                padding: 16,
                gap: 24,
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}
        >
            <HeaderCard subtitle='Department Information' formData={formData} handleChange={handleChange}/>

            <FormQuestions data={formData} section={1} handleChange={handleChange}/>

            <FormButtons section={1} handleNext={onNextButton}/>
        </div>
    );
}

const WeeklyAttendance = ({formData, handleChange, onNextButton, onBackButton}) => {
    const serviceDays = DateUtils.getServiceDays(formData.year, formData.month)
    const groupedDates = DateUtils.sectionServiceDays(serviceDays)
  
    return (
        <div 
            style={{
            padding: 16,
            gap: 24,
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
            }}
        >  
            <HeaderCard subtitle='Attendance (Weekly Activities)' fieldsVisible={false}/>

            <FormQuestions data={formData} section={2} dates={groupedDates} handleChange={handleChange}/>

            <FormButtons section={2} handleNext={onNextButton} handleBack={onBackButton}/>
        </div>
    )
}

const OtherAttendance = ({formData, handleChange, onNextButton, onBackButton}) => {

    return (
        <div 
            style={{
            padding: 16,
            gap: 24,
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
            }}
        >  

            <HeaderCard subtitle='Attendance (Other Activities)' fieldsVisible={false}/>

            <FormQuestions data={formData} section={3} handleChange={handleChange}/>

            <FormButtons section={3} handleNext={onNextButton} handleBack={onBackButton}/>
        </div>
    )
}

const OtherInfo = ({formData, handleChange, onBackButton}) => {

    return (
        <div style={{
            padding: 16,
            gap: 24,
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
        }}>

            <HeaderCard subtitle='Other Info' fieldsVisible={false}/>

            <FormQuestions data={formData} section={4} handleChange={handleChange}/>

            <FormButtons section={4} handleBack={onBackButton}/>
        </div>
    );
}

export { DepartmentInfo, WeeklyAttendance, OtherAttendance, OtherInfo }