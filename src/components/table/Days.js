import React from 'react'

const Days = ({selectedBlock}) => {
  
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	return (
		<div className="days-container">
			<ul>
				{
					days.map(day => { 
						const styleDay = day === selectedBlock.day ? {color: "var(--active-color)"} : {};
						return <li key={day} style={styleDay} >{day}</li>
					})
				}
			</ul>
		</div>
	)
}

export default Days;
