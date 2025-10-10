import React from 'react'

import { ChevronDown } from 'lucide-react'

import { departments, months } from "../constants/constants";


const FormEntryDetails = ({data, handleChange }) => {
    return (
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