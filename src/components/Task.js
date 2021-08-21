import React from 'react'
import imgEdit from '../assets/edit.png';

const Task = ({color, name}) => {


  return (
    <div style={{background: color}}>
      <p>{name}</p>
      <div>
        <img className="edit-btn" src={imgEdit} alt="" />
        <button className="delete-btn">x</button>
      </div>
    </div>
  )
}

export default Task;
