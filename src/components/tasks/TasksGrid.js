import React from 'react'
import NewTask from './NewTask';
import Task from "./Task";
import './TasksGrid.css';


const TasksGrid = ({color, setColor, name, setName, tasks, setTasks, selectedTask, setSelectedTask}) => {

  return (
    <div className="container tasks-container">
      {name && <NewTask color={color} name={name} /> } 

      { tasks.map(task => <Task key={task.name} name={task.name} setName={setName} 
                                                color={task.color} setColor={setColor}  
                                                setTasks={setTasks} 
                                                selectedTask={selectedTask} setSelectedTask={setSelectedTask} />) 
      }
      
    </div>
  )
}

export default TasksGrid;
