import React, { useState } from 'react'
import initializeArrayTo from './helpers/inizializeArray'

const Blocks = ({setHoverBlock, selectedTask, tasks}) => {

	const hoursArray = initializeArrayTo(24);
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	const handlerPosicionBlock = e => {

		const position = e.target.dataset.position;
		const day = position.slice(0,3);
		const hour = Number(position.substring(3)) ;
		setHoverBlock({day, hour});
	}

	const handlerOut = () => setHoverBlock("");

	const [selectedBlocks, setSelectedBlocks] = useState([]);

	const selecteBlock = e => {
		
		const $block = e.target;
		const nameTask = selectedTask.name;

		if(selectedTask === "" || $block.dataset.task === nameTask) {
			$block.style.background = "var(--second-color)";
			$block.removeAttribute("data-task");
			return;
		}

		const position = $block.dataset.position;
		const color = tasks.filter(task => task.name === nameTask)[0].color;
		$block.style.background = color;
		$block.setAttribute("data-task", nameTask);

		setSelectedBlocks(data => [...data, {position, task: nameTask}]);
	}


	return (
		<div className="blocks-container">
			{
				days.map(day => {
					return <div key={day}>
						{
							hoursArray.map(hour => {
								
								return <div key={`${day}${hour}`} 
														data-position={`${day}${hour}`}
														onMouseOver={handlerPosicionBlock}
														onMouseOut={handlerOut}
														onClick={selecteBlock} 
														
											></div>
						})}
					</div>
				})
			}
			
		</div>
	)
}

export default Blocks;
