import React from 'react'
import initializeArrayTo from './helpers/inizializeArray'

const Blocks = () => {

	const hoursArray = initializeArrayTo(24);
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];


	return (
		<div className="blocks-container">
			{
				days.map(day => {
					return <div key={day}>
						{
							hoursArray.map(hour => <div key={`${day}${hour}`} data-position={`${day}${hour}`}></div>)
						}
					</div>
				})
			}
			
		</div>
	)
}

export default Blocks;
