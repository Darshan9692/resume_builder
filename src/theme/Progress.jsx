import React from 'react'

const Progress = (props) => {
    return (
        <div className='flex flex-row items-center gap-2'>
            <span className={`bg-white p-2 rounded-full ${props.className}`}>{props.icon}</span>
            <p>{props.title}</p>
        </div>
    )
}

export default Progress