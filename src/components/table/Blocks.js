import React from 'react'
import initializeArrayTo from './helpers/inizializeArray'

const Blocks = ({setHoverBlock, selectedTask, tasks, editTask, color, selectedBlocks, setSelectedBlocks}) => {

	const hoursArray = initializeArrayTo(24);
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	const handlerPosicionBlock = e => {

		const position = e.target.dataset.position;
		const day = position.slice(0,3);
		const hour = Number(position.substring(3)) ;
		setHoverBlock({day, hour});
	}

	const handlerOut = () => setHoverBlock("");

	const selecteBlock = e => {

		const nameTask = selectedTask.name;
		const position = e.target.dataset.position;

		if(selectedTask === ""){
			setSelectedBlocks(selectedBlocks.filter(el => el.position !== position));
			return;
		}

		if(selectedBlocks.filter(el => el.position === position)[0]){
			if(selectedBlocks.filter(el => el.position === position && el.task === nameTask)[0]){
				
				setSelectedBlocks(selectedBlocks.filter(el => el.position !== position));
			}
			else{
				
				setSelectedBlocks(data => data.map(el => {
          if(el.position === position) return {position: el.position, task: nameTask};
          return el;
        }));
				
			}
		}
		else{

			setSelectedBlocks(data => [...data, {position, task: nameTask}]);
		}

	}

	const findColorBlock = (day, hour) => {
		
		if(!selectedBlocks.length) return;
		if(!tasks.length) return;

		if(!selectedBlocks.filter(el => el.position === `${day}${hour}`)[0]) return;
		const nameTask = selectedBlocks.filter(el => el.position === `${day}${hour}`)[0].task;

		if(editTask === nameTask) return color;
		
		if(!tasks.filter(task => task.name === nameTask)[0]){
			setSelectedBlocks(selectedBlocks.filter(el => el.task !== nameTask));
			return;
		}
		const colorBlock = tasks.filter(task => task.name === nameTask)[0].color;
		
		return colorBlock;
	}

	return (
		<div className="blocks-container">
			{
				days.map(day => {
					return <div key={day}>
						{
							hoursArray.map(hour => {
								
								const colorBlock = findColorBlock(day, hour);

								const styleBlock = colorBlock ? {background: colorBlock}: {};

								return <div key={`${day}${hour}`} 
														data-position={`${day}${hour}`}
														onMouseOver={handlerPosicionBlock}
														onMouseOut={handlerOut}
														onClick={selecteBlock} 
														style={styleBlock}></div>
						})}
					</div>
				})
			}
			
		</div>
	)
}

export default Blocks;
