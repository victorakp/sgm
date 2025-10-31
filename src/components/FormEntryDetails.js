import React from 'react'

import { ChevronDown } from 'lucide-react'

import { departments, months } from "../constants/constants";


const FormEntryDetails = ({data, handleChange }) => {
    return (
        <div className="formEntryDetails">
            <div className='entry'>
                <label> Department <span className="required"> * </span></label>
                
                <div style={{position: 'relative'}}>
                    <select 
                        className='entrySelect'
                        name="department"
                        value={data.departments}
                        onChange={handleChange}
                        required
                    >
                        <option value=''> ---- Select your Department ---- </option>
                        {departments.map((dept, i) => (
                            <option key={i} value={dept}>{dept}</option>
                        ))}
                    </select>

                    <ChevronDown size={16} style={{position: 'absolute', padding: '16px', right: 0 }}/>
                </div>
            </div>

            <div className='entry' style={{paddingBottom: '32px'}}>
                <label> Month <span className="required"> * </span></label>
                
                <div style={{position: 'relative'}}>
                    <select 
                        className='entrySelect'
                        name="month"
                        value={data.month}
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
}

export default FormEntryDetails