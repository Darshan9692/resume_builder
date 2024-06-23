import React from 'react';
import { gender } from '../utils/gender';

const Radio = (props) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={props?.name} className="text-sm font-medium text-gray-700">
                {props?.name}
            </label>
            <div className={`flex gap-4 ${props?.className}`} id={props?.name}>
                {
                    gender.map((value) => (
                        <div key={value?.id} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name={props?.name}
                                id={`${props?.name}-${value?.id}`}
                                value={value?.id}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`${props?.name}-${value?.id}`} className="text-sm font-medium text-gray-700">
                                {value?.title}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Radio;
