import React, { useState } from 'react' 

import FormResult from './FormResult'
import FormEntryDetails from './FormEntryDetails'

const HeaderCard = ({subtitle, formData, handleChange, fieldsVisible= true, result= false, loading}) => {
    
    const [dropDownSelected, setDropDownSelected] = useState(false)

    return (
        <div className='cardContainer' style= {{border: '1px solid #BEC0C4', borderBottom: 0}}>     
            <div className='topStrip'/>

            <div>
                <h1 className='formTitle'>SGM Departmental Appraisal Form</h1>
                
                {result === false ? (
                    <>
                        {fieldsVisible && <FormEntryDetails data={formData} handleChange={handleChange}/>}

                        <h1 className='formTitle' style={{fontSize: 16, fontWeight: 'normal'}}> {subtitle} </h1>
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
    <div className="cardContainer">
        <div className= "card">
            <label> {title} <span className="required"> * </span></label>
            
            <input 
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
                <div key={cardIndex} className="cardContainer">  
                    {card.map(date => {
                        const title = date.toDateString()
                        const value = arr[title]

                        return(
                            <div key={title} className= "card">
                                <label> {title} <span className="required"> * </span></label>
                                
                                <input 
                                    key= {title}
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