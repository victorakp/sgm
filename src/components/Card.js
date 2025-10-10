import React, { useState } from 'react' 

import FormResult from './FormResult'
import FormEntryDetails from './FormEntryDetails'

const HeaderCard = ({subtitle, formData, handleChange, fieldsVisible= true, result= false, loading}) => {
    
    const [dropDownSelected, setDropDownSelected] = useState(false)

    return (
        <div style={{
            backgroundColor: '#fff',
            border: '1px solid #BEC0C4', 
            borderRadius: '16px',
            width: '100%',
            maxWidth: '710px',
            margin: 'auto',
            overflow: 'hidden'
        }}>
            <div style={{backgroundColor: '#3B76EC', height: 16}}/>

            <div>
                <h1 style={{margin: 0, borderBottom: '1px solid #BEC0C4', fontSize: 24, padding: '24px 32px'}}>SGM Departmental Appraisal Form</h1>
                
                {result === false ? (
                    <>
                        {fieldsVisible && <FormEntryDetails data={formData} handleChange={handleChange}/>}

                        <h1 style={{borderBottom: '1px solid #BEC0C4', margin: 0, fontSize: 16, fontWeight: 'normal', padding: '24px 32px'}}>{subtitle}</h1>

                    </>
                )  

                :

                    <FormResult loading={loading} data={formData} text={subtitle} dropDownState={{summaryOpen: dropDownSelected, setSummaryOpen: setDropDownSelected}} />

                }
                
            </div>

        </div>
    )
}

const QuestionCard = ({title, type, name, value, onChange, required}) => {
  return (
    <div style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #BEC0C4', 
        borderRadius: '16px',
        width: '100%',
        maxWidth: '710px',
        margin: 'auto',
        overflow: 'hidden'
    }}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 24, padding: '24px 32px', overflow: 'hidden'}}>
            <label> {title} <span className="required"> * </span></label>
            
            <input 
                style={{maxWidth: '250px', width: '100%'}} 
                required={required}
                type={type}
                name={name}    
                value={value}
                onChange={onChange}
            />                              
        </div>
    </div>
  )
}

const AttendanceCard = ({dates, arr, handleChange}) => {
    return(
        <>
            {dates.map((card, cardIndex) => (   
                <div key={cardIndex} 
                    style={{
                        backgroundColor: '#fff',
                        borderBottom: '1px solid #BEC0C4', 
                        borderRadius: '16px',
                        width: '100%',
                        maxWidth: '710px',
                        gap: 24,
                        margin: 'auto',
                        overflow: 'hidden'
                        
                    }}
                >  
                    {card.map(date => {
                        const title = date.toDateString()
                        const value = arr[title]

                        return(
                            <div key={title} style={{display: 'flex', flexDirection: 'column', gap: 24, padding: '24px 32px', overflow: 'hidden'}}>
                                <label> {title} <span className="required"> * </span></label>
                                
                                <input 
                                    key= {title}
                                    style={{maxWidth: '250px', width: '100%'}} 
                                    required
                                    type="number"
                                    name="name"
                                    value={value}
                                    onChange={(e) => handleChange(e, date)}
                                />                              
                            </div>                        
                        )
                    })}
                </div>
            ))} 
        </>
    )
}

export { AttendanceCard, HeaderCard, QuestionCard }