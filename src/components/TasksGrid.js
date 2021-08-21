import React from 'react'
import NewTask from './NewTask';
import Task from "./Task";
import './TasksGrid.css';


const TasksGrid = ({color, name, tasks, setTasks}) => {

  return (
    <div className="container tasks-container">
      {name && <NewTask color={color} name={name} /> } 

      { tasks.map(task => <Task key={task.name} name={task.name} color={task.color} />) }
      
    </div>
  )
}

export default TasksGrid;
