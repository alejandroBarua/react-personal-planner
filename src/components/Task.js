import React from 'react'
import imgEdit from '../assets/edit.png';

const Task = ({color, name, setName, setColor, setTasks, selectedTask, setSelectedTask}) => {

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

  const selecteTask = e => {

    const taskName = e.target.dataset.name;
    setSelectedTask(taskName);
  }

  const styleTask = {background: color};
  if(selectedTask === name) styleTask.border = "2px solid white";
  
  return (

    <div style={styleTask} >
      <p data-name={name} onClick={selecteTask}>{name}</p>
      <div>
        <img className="edit-btn" data-name={name} data-color={color} onClick={editTask} src={imgEdit} alt="" />
        <button className="delete-btn" data-name={name} onClick={removeTask} >x</button>
      </div>
    </div>
  )
}

export default Task;
