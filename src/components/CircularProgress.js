import React from 'react'

const CircularProgress = ({ size = 100, strokeWidth = 15, value = 0, weight, text, style}) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (value / 100) * circumference 

    return (
        <svg width={size} height={size}>
            <circle
                stroke= '#edf3fd'
                fill= 'transparent'
                strokeWidth={strokeWidth}
                r= {radius}
                cx= {size / 2}
                cy= {size / 2}
            />

            <circle
                stroke= '#3b76ec'
                fill= 'transparent'
                strokeWidth={strokeWidth}
                r= {radius}
                cx= {size / 2}
                cy= {size / 2}
                strokeDasharray= {circumference}
                strokeDashoffset={offset}
                strokeLinecap='round'
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />

            <text
                x= "50%"
                y= "50%"
                textAnchor= "middle"
                dy= "0.3em"
                fontWeight= "bold"
                fill='#000'
            >
                <tspan dy= "-0.2em" fontSize= "32">{text}</tspan>
                <tspan dy= "0.6em" fontSize= "56" transform="skewX(-50)">⁄</tspan>
                <tspan dy= "0.3em" fontSize= "32">{weight}</tspan>
            </text>


        </svg>
    )
}

export default CircularProgress