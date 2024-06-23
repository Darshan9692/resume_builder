import React from 'react'
import HOC from '../utils/HOC'

const ClickEvent = (props) => {
  return (
    <button onClick={props.handler}>I'm clicked {props.counter} times</button>
  )
}

export default HOC(ClickEvent)