import React, { useState } from 'react'

const HOC = (OriginalComponent) => {
    const NewComponent = () => {
        const [counter, setCounter] = useState(0);
        const increment = () => {
            setCounter(counter + 1);
        }
        return <OriginalComponent counter={counter} handler={increment}/>
    }
    return NewComponent;
}

export default HOC