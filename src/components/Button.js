import React from 'react'

const Button = ({type, title, variant= 'next', onClick}) => {
    const Styles = {
        base: {
            borderRadius: '8px',
            border: '1px solid #BEC0C4',
            cursor: 'pointer',
            transition: 'background 0.25s ease'
        },

        next: {
            padding: '16px 40px', 
            backgroundColor: '#3B76EC', 
            color: '#fff',
        },

        back: {
            padding: '16px 40px', 
            backgroundColor: '#fff', 
            color:'#3B76EC'
        },
        
        clear: {
            padding: '16px 0px', 
            backgroundColor: 'transparent',
            color:'#3B76EC',
            border: 0
        }

    }

    return (
        <button style={{...Styles.base, ...Styles[variant]}} type={type} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button