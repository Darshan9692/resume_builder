import React from 'react'
import HOC from '../utils/HOC'

const HoverEvent = (props) => {
    return (
        <p onMouseOver={props.handler}>I'm hovered {props.counter} times</p>
    )
}

export default HOC(HoverEvent)