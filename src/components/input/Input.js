import React from 'react';
import Colors from './Colors';
import './Input.css';

const Input = ({color, setColor, name, setName, setTasks, selectedTask, setSelectedTask, editTask, setEditTask, setSelectedBlocks}) => {

	const handleInputColor = e => setColor(e.target.value);
	const handleInputName = e => setName(e.target.value);

	const handleAddTask = () => {
    if(name.trim().length < 3) return;

    setTasks(tasks => {

      if(Object.values(tasks).filter(task => task.name === name).length !== 0) return tasks;

      setName('');
      if(editTask !== ""){
        if(editTask === selectedTask.name) setSelectedTask({name, color});
        setSelectedBlocks(data => data.map(el => {
          if(el.task === editTask) return {position: el.position, task: name};
          return el;
        }));
        setEditTask('');
      }
      return  [{name, color}, ...tasks];
    });
  };


  return (
    <div className="input-container">
      <div className="container">
        <input className="color-input" type="color" value={color} onChange={handleInputColor} />
        <input className="input-text" type="text" placeholder="new task" value={name} onChange={handleInputName} />
        <button className="btn" onClick={handleAddTask} >Add</button>
        <Colors setColor={setColor} />
      </div>
    </div>
  )
}

export default Input;
