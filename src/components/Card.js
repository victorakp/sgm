import { ChevronDown } from 'lucide-react'
import React from 'react' 

const HeaderCard = ({subtitle, formData, handleChange, fieldsVisible= true, result= false, departments, months}) => {
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
                    fieldsVisible &&
                        <div style={{borderBottom: '1px solid #BEC0C4', display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: 24, padding: '24px 0px 32px 24px', width: '100%'}}>
                                <label> Department <span className="required"> * </span></label>
                                
                                <div style={{position: 'relative'}}>
                                    <select 
                                        style={{
                                            width: '100%', 
                                            border: '1px solid #BEC0C4', 
                                            borderRadius: '8px', 
                                            padding: '16px', 
                                            appearance: 'none'
                                        }}
                                        name="department"
                                        value={formData.departments}
                                        onChange={handleChange}
                                        required={true}
                                    >
                                        <option value=''> ---- Select your Department ---- </option>
                                        {departments.map((dept, i) => (
                                            <option key={i} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                                               
                                    <ChevronDown size={16} style={{position: 'absolute', padding: '16px', right: 0 }}/>
                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', gap: 24, padding: '24px 32px', width: '100%'}}>
                                <label> Month <span className="required"> * </span></label>
                                
                                <div style={{position: 'relative'}}>
                                    <select 
                                        style={{
                                            width: '100%', 
                                            border: '1px solid #BEC0C4', 
                                            borderRadius: '8px', 
                                            padding: '16px', 
                                            appearance: 'none'
                                        }}
                                        name="month"
                                        value={formData.month}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value=''> ---- Select Month ---- </option>
                                        {months.map((m, i) => (
                                            <option key={i} value={m}>{m}</option>
                                        ))}
                                    </select>
                                                                    
                                    <ChevronDown size={16} style={{position: 'absolute', padding: '16px', right: 0 }}/>
                                </div>
                            </div>
                        </div>
                    )     
                :

                    <div style={{borderBottom: '1px solid #BEC0C4', padding: '24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div>Your Attendance Score is</div>
                        <div>Your Attendance Score is</div>
                    </div>
                }
                

                <h1 style={{margin: 0, fontSize: 16, fontWeight: 'normal', padding: '24px 32px'}}>{subtitle}</h1>

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