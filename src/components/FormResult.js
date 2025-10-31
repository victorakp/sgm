import React from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

import CircularProgress from './CircularProgress'
import LoadingIcon from './LoadingIcon'

const FormResult = ({loading, data, text, dropDownState}) => {
    const { summaryOpen, setSummaryOpen } = dropDownState

    return (
        <>
            {loading && <h1 style={{borderBottom: '1px solid #BEC0C4', margin: 0, fontSize: 16, fontWeight: 'normal', padding: '24px 32px'}}>{text}</h1>}
            <div style={{borderBottom: '1px solid #BEC0C4', padding: '24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24}}>
                {loading === false ?
                    <>
                        <div>Your Total Attendance Score is:</div>

                        <CircularProgress
                            size={188}
                            value={(data.weeklyServiceAttendance.percentage + data.evangelismAttendance.percentage) / 2} 
                            weight={data.weeklyServiceAttendance.weight + data.evangelismAttendance.weight} 
                            text={Math.round((data.weeklyServiceAttendance.weightedScore + data.evangelismAttendance.weightedScore) * 10) / 10}
                        />
                    </>
                :
                    <LoadingIcon />        
                }
            </div>

            {loading === false && 
                <>
                    <div style={{margin: 0, fontSize: 16, fontWeight: 'normal', padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 2}} onClick={() => setSummaryOpen(x => !x)}>
                        {summaryOpen === false ? 
                            <> See Summary <ChevronDown size={16} style={{display: 'flex', justifyContent: 'center'}}/></>
                        : 
                            <> Close Summary <ChevronUp size={16} style={{display: 'flex', justifyContent: 'center'}}/></>
                        }
                    </div>
                    
                    {summaryOpen &&
                        <div style={{padding: '0px 32px 24px 32px', display: 'flex', flexDirection: 'column', gap: 32}}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{fontWeight: 'bold', width: '35%'}}>Weekly Service Attendance:</div>

                                <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                                    <div>Average: {data.weeklyServiceAttendance.average}</div>

                                    <div>Appraisal Score: {" "}
                                        <div className="fraction">
                                            <div className="numerator">{data.weeklyServiceAttendance.weightedScore}</div>
                                            <div className="slash">⁄</div>
                                            <div className="denominator">{data.weeklyServiceAttendance.weight}</div>
                                        </div>
                                   </div>

                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{fontWeight: 'bold', width: '35%'}}>Evangelism Attendance:</div>
                                <div>Appraisal Score:
                                    <div className="fraction">
                                        <div className="numerator">{data.evangelismAttendance.weightedScore}</div>
                                        <div className="slash">⁄</div>
                                        <div className="denominator">{data.evangelismAttendance.weight}</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    }
                </>
            }   
        </> 
    )
}

export default FormResult