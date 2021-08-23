import React from 'react'
import PreviewTask from './PreviewTask';
import Task from "./Task";
import './TasksGrid.css';


const TasksGrid = ({color, setColor, name, setName, tasks, setTasks, selectedTask, setSelectedTask, setEditTask, setSelectedBlocks}) => {

  return (
    <div className="container tasks-container">
      {name && <PreviewTask color={color} name={name} /> } 

      { tasks.map(task => <Task key={task.name} name={task.name} setName={setName} 
                                                color={task.color} setColor={setColor}  
                                                setTasks={setTasks} 
                                                selectedTask={selectedTask} setSelectedTask={setSelectedTask}
                                                setEditTask={setEditTask} />) 
      }
      
    </div>
  )
}

export default TasksGrid;
