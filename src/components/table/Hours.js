import React from 'react'

import initializeArrayTo from "./helpers/inizializeArray";

const Hours = () => {

	const hoursArray = initializeArrayTo(24);

	return (
		<div className="hours-container">
			{
				hoursArray.map(hour => <div key={hour}><p>{hour}</p></div>) 
			}
		</div>
	)
}

export default Hours;
