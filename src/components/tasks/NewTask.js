import React from 'react'

const NewTask = ({color, name}) => {


  return (
    <div style={{background: color}}>
      <p>{name}</p>
    </div>
  )
}

export default NewTask;
