import React from 'react'
import imgEdit from '../assets/edit.png';

const Task = ({color, name, setTasks}) => {

  const removeTask = e => {

    const task = e.target.dataset.name;
    setTasks(tasks => tasks.filter(el => el.name !== task));
  }

  return (
    <div style={{background: color}}>
      <p>{name}</p>
      <div>
        <img className="edit-btn" src={imgEdit} alt="" />
        <button className="delete-btn" data-name={name} onClick={removeTask} >x</button>
      </div>
    </div>
  )
}

export default Task;
