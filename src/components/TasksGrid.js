import React from 'react'
import NewTask from './NewTask';
import Task from "./Task";
import './TasksGrid.css';


const TasksGrid = ({color, name, tasks, setName, setColor, setTasks}) => {

  return (
    <div className="container tasks-container">
      {name && <NewTask color={color} name={name} /> } 

      { tasks.map(task => <Task key={task.name} name={task.name} color={task.color} setColor={setColor} setName={setName} setTasks={setTasks} />) }
      
    </div>
  )
}

export default TasksGrid;
