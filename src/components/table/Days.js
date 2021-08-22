import React from 'react'

const Days = ({hoverBlock}) => {
  
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	return (
		<div className="days-container">
			<ul>
				{
					days.map(day => { 
						const styleDay = day === hoverBlock.day ? {color: "var(--active-color)"} : {};
						return <li key={day} style={styleDay} >{day}</li>
					})
				}
			</ul>
		</div>
	)
}

export default Days;
