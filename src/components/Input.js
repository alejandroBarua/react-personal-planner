import React from 'react'
import Colors from './Colors';

import './Input.css';

const Input = ({color, setColor, name, setName}) => {

	const handleInputColor = e => setColor(e.target.value);
	const handleInputName = e => setName(e.target.value);


  return (
    <div className="input-container">
      <div className="container">
        <input className="color-input" type="color" value={color} onChange={handleInputColor} />
        <input className="input-text" type="text" placeholder="new task" value={name} onChange={handleInputName} />
        <button className="add-btn">Add</button>
        <Colors setColor={setColor} />
      </div>
    </div>
  )
}

export default Input;
