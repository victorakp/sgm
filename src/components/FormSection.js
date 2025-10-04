import React from 'react'

import { AttendanceCard, HeaderCard, QuestionCard } from "./Card";

import Button from "./Button";

import { departments, months } from "../constants/constants";

import * as DateUtils from "../utils/dateUtils"

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
        <HeaderCard 
            subtitle='Department Information'
            formData={formData}
            handleChange={handleChange}
            departments={departments}
            months={months}
        />

        <QuestionCard title='Total Number of Members' type="number" name="totalMembers" value={formData.totalMembers} onChange={handleChange} required={true}/>
        <QuestionCard title='New members added in the month' type="number" name="newMembers" value={formData.newMembers} onChange={handleChange} required={true}/>
        <QuestionCard title='Number of general meetings & other activities held in the month' type="number" name="activities" value={formData.activities} onChange={handleChange} required={true}/>
        <QuestionCard title='Number of Exco Meetings in the month' type="number" name="excoMeetings" value={formData.excoMeetings} onChange={handleChange} required={true}/>
        <QuestionCard title='Number of members who traveled, on duty, or had taken other excuses' type="number" name="traveled" value={formData.traveled} onChange={handleChange} required={true} />

        <div style={{
            width: '100%',
            maxWidth: '710px',
            margin: 'auto',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Button type='button' variant="next" title='Next' onClick={onNextButton}/>       
            <Button type='button' variant='clear' title='Clear Form'/>       
        </div>

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

        <AttendanceCard 
            dates={groupedDates}
            arr={formData.weeklyAttendance}
            handleChange={handleChange}
        /> 

        <div style={{
            width: '100%',
            maxWidth: '710px',
            margin: 'auto',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 8
            }}>
                <Button type='button' variant="back" title='Back' onClick={onBackButton}/>       
                <Button type='button' variant="next" title='Next' onClick={onNextButton}/>       
            </div>
            <Button variant='clear' title='Clear Form'/>       
        </div>
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

            <QuestionCard title='Evangelism' type="number" name="evangelism" value={formData.evangelism} onChange={handleChange} required={true} />

            <div style={{
                width: '100%',
                maxWidth: '710px',
                margin: 'auto',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8
                }}>
                    <Button type='button' variant="back" title='Back' onClick={onBackButton}/>       
                    <Button type='button' variant="next" title='Next' onClick={onNextButton}/>       
                </div>
                <Button variant='clear' title='Clear Form'/>      
            </div>
        </div>
    )
}

const OtherInfo = ({formData, handleChange, onBackButton}) => {

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

        <HeaderCard subtitle='Other Info' fieldsVisible={false}/>

        <QuestionCard title='Is there Counsel or Awareness Information aimed at helping members' type="text" name="awarenessInfo" value={formData.awarenessInfo} onChange={handleChange} required={true}/>
        <QuestionCard title='Is there any challenge the department is facing?' type="text" name="departmentChallenges" value={formData.departmentChallenges} onChange={handleChange} required={true}/>
        <QuestionCard title='Is there any matter that requires the intervention of the Bishop or Church Council?' type="text" name="churchCouncilIntervention" value={formData.churchCouncilIntervention} onChange={handleChange} required={true}/>
        <QuestionCard title='Any Additional information not captured in this appraisal?' type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} required={true}/>

        <div style={{
                width: '100%',
                maxWidth: '710px',
                margin: 'auto',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 8
                }}>
                    <Button type='button' variant="back" title='Back' onClick={onBackButton}/>       
                    <Button type='submit' variant="next" title='Submit'/>       
                </div>
                <Button variant='clear' title='Clear Form'/>      
            </div>

        </div>
    );
}

export { DepartmentInfo, WeeklyAttendance, OtherAttendance, OtherInfo }