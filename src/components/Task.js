import React from 'react'
import imgEdit from '../assets/edit.png';

const Task = ({color, name, setName, setColor, setTasks}) => {

  const removeTask = e => {

    const taskName = e.target.dataset.name;
    setTasks(tasks => tasks.filter(el => el.name !== taskName));
    return taskName;
  }

  const editTask = e => {

    const taskName = removeTask(e);
    const taskColor = e.target.dataset.color;
    setName(taskName);
    setColor(taskColor);
  }

  return (
    <div style={{background: color}}>
      <p>{name}</p>
      <div>
        <img className="edit-btn" data-name={name} data-color={color} onClick={editTask} src={imgEdit} alt="" />
        <button className="delete-btn" data-name={name} onClick={removeTask} >x</button>
      </div>
    </div>
  )
}

export default Task;
