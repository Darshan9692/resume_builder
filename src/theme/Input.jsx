import React, { Fragment } from 'react'

const Input = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={props?.name}>{props?.title}</label>
            <input
                className="bg-transparent border-b-2 border-black text-gray-600 outline-none"
                type={props?.type}
                name={props?.name}
                id={props?.name}
                placeholder={props.placeholder}
                readOnly={props.name === "skills"}  // Correct usage of readOnly attribute
            />
        </div>
    )
}

export default Input
