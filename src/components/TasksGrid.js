import React from 'react'
import NewTask from './NewTask';
import Task from "./Task";
import './TasksGrid.css';


const TasksGrid = ({color, name}) => {


  return (
    <div className="container tasks-container">
      {name && <NewTask color={color} name={name} /> } 
      <Task name="hello world" color="#000000" />
      <Task name="hello world" color="#000000" />
      <Task name="hello world" color="#000000" />
    </div>
  )
}

export default TasksGrid;
