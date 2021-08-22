import React from 'react'
import initializeArrayTo from './helpers/inizializeArray'

const Blocks = ({setSelectedBlock}) => {

	const hoursArray = initializeArrayTo(24);
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	const handlerPosicionBlock = e => {

		const position = e.target.dataset.position;
		const day = position.slice(0,3);
		const hour = Number(position.substring(3)) ;
		setSelectedBlock({day, hour});
	}

	const handlerOut = () => setSelectedBlock("");


	return (
		<div className="blocks-container">
			{
				days.map(day => {
					return <div key={day}>
						{
							hoursArray.map(hour => <div key={`${day}${hour}`} 
																					data-position={`${day}${hour}`}
																					onMouseOver={handlerPosicionBlock}
																					onMouseOut={handlerOut}></div>)
						}
					</div>
				})
			}
			
		</div>
	)
}

export default Blocks;
