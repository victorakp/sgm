import React from 'react'

import Button from './Button'

const FormButtons = ({section, handleNext, handleBack, handleClear}) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '710px',
            margin: 'auto',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: 8}}>
                {[2, 3, 4].includes(section) && 
                    <Button type='button' variant="back" title='Back' onClick={handleBack}/>
                }

                {section!==4 ? 
                    <Button type='button' variant="next" title='Next' onClick={handleNext}/>  
                :  
                    <Button type='submit' variant="next" title='Submit'/>
                }

            </div>            
            
            <Button type='button' variant='clear' title='Clear Form'/>       
        </div>
    )
}

export default FormButtons