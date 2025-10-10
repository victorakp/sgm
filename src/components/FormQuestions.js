import React from 'react'

import { AttendanceCard, QuestionCard } from './Card'

const FormQuestions = ({data, dates, section, handleChange}) => {
    switch(section) {
        case 1:
            return (
                <>
                    <QuestionCard title='Total Number of Members' type="number" name="totalMembers" value={data.totalMembers} onChange={handleChange} required={true}/>
                    <QuestionCard title='New members added in the month' type="number" name="newMembers" value={data.newMembers} onChange={handleChange} required={true}/>
                    <QuestionCard title='Number of general meetings & other activities held in the month' type="number" name="activities" value={data.activities} onChange={handleChange} required={true}/>
                    <QuestionCard title='Number of Exco Meetings in the month' type="number" name="excoMeetings" value={data.excoMeetings} onChange={handleChange} required={true}/>
                    <QuestionCard title='Number of members who traveled, on duty, or had taken other excuses' type="number" name="traveled" value={data.traveled} onChange={handleChange} required={true} />
                </>
            )

        case 2: return <AttendanceCard dates={dates} arr={data.weeklyAttendance} handleChange={handleChange}/> 
                
        case 3: return <QuestionCard title='Evangelism' type="number" name="evangelism" value={data.evangelism} onChange={handleChange} required={true} />

        case 4:
            return (
                <>
                    <QuestionCard title='Is there Counsel or Awareness Information aimed at helping members' type="text" name="awarenessInfo" value={data.awarenessInfo} onChange={handleChange} required={true}/>
                    <QuestionCard title='Is there any challenge the department is facing?' type="text" name="departmentChallenges" value={data.departmentChallenges} onChange={handleChange} required={true}/>
                    <QuestionCard title='Is there any matter that requires the intervention of the Bishop or Church Council?' type="text" name="churchCouncilIntervention" value={data.churchCouncilIntervention} onChange={handleChange} required={true}/>
                    <QuestionCard title='Any Additional information not captured in this appraisal?' type="text" name="additionalInfo" value={data.additionalInfo} onChange={handleChange} required={true}/>
                </>
            )

        default: return null
    }
}

export default FormQuestions