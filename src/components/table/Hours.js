import React from 'react'

import initializeArrayTo from "./helpers/inizializeArray";

const Hours = ({hoverBlock}) => {

	const hoursArray = initializeArrayTo(24);

	
	return (
		<div className="hours-container">
			{
				hoursArray.map(hour => {
					
					const styleHour = hour === hoverBlock.hour ? {color: "var(--active-color)"} : {};
					return <div key={hour}><p style={styleHour}>{hour}</p></div>
				}) 
			}
		</div>
	)
}

export default Hours;
