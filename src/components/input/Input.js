import React from 'react'
import Colors from './Colors';

import './Input.css';

const Input = ({color, setColor, name, setName, setTasks, setSelectedTask}) => {

	const handleInputColor = e => setColor(e.target.value);
	const handleInputName = e => setName(e.target.value);

	const handleAddTask = () => {
    if(name.trim().length < 3) return;

    setTasks(tasks => {

      if(Object.values(tasks).filter(task => task.name === name).length !== 0) return tasks;

      setName('');
      return  [{name, color}, ...tasks];
    });
    setSelectedTask({name, color});
  };


  return (
    <div className="input-container">
      <div className="container">
        <input className="color-input" type="color" value={color} onChange={handleInputColor} />
        <input className="input-text" type="text" placeholder="new task" value={name} onChange={handleInputName} />
        <button className="add-btn" onClick={handleAddTask} >Add</button>
        <Colors setColor={setColor} />
      </div>
    </div>
  )
}

export default Input;
