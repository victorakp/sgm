import React from 'react'

import '../css/Form.css'

const LoadingIcon = ({loadingText}) => {
    return (
        <div className='loadingIconContainer'>
            <div className="spinner">
                {Array.from({ length: 8 }).map((_, i) => <div key={i}/>)}
            </div>
            <p style={{fontWeight: 'bold', color: "#3B76EC", fontSize: 18}}>
                {loadingText}
            </p>
        </div>  
    )
}

export default LoadingIcon