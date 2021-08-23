import React from 'react'
import imgEdit from './assets/edit.png';

const Task = ({color, name, setName, setColor, setTasks, selectedTask, setSelectedTask, setEditTask}) => {

  const removeTask = e => {

    const taskName = e.target.dataset.name;
    setTasks(tasks => tasks.filter(el => el.name !== taskName));
    setEditTask("");
    setSelectedTask("");
    return taskName;
  }

  const editTask = e => {

    const taskName = removeTask(e);
    const taskColor = e.target.dataset.color;
    setEditTask(taskName);
    setName(taskName);
    setColor(taskColor);
  }

  const selecteTask = e => {
    
    const nameTask = e.target.dataset.name;
    const colorTask = e.target.dataset.color;

    if(nameTask === selectedTask.name) return setSelectedTask("");

    setSelectedTask({name: nameTask, color: colorTask});
  }
  
  const styleTask = {background: color};
  if(selectedTask.name === name) styleTask.border = "2px solid white";
  
  return (

    <div style={styleTask} >
      <p data-name={name} data-color={color} onClick={selecteTask}>{name}</p>
      <div>
        <img className="edit-btn" data-name={name} data-color={color} onClick={editTask} src={imgEdit} alt="" />
        <button className="delete-btn" data-name={name} onClick={removeTask} >x</button>
      </div>
    </div>
  )
}

export default Task;
