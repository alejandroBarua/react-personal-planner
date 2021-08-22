import React from 'react'

const PreviewTask = ({color, name}) => {


  return (
    <div style={{background: color}}>
      <p>{name}</p>
    </div>
  )
}

export default PreviewTask;
