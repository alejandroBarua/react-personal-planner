import React from 'react'

const Days = () => {
  
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	return (
		<div className="days-container">
			<ul>
				{
					days.map(day => <li key={day}>{day}</li>)
				}
			</ul>
		</div>
	)
}

export default Days;
