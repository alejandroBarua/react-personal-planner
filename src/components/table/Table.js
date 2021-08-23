import React, { useState } from 'react'

import './Table.css';
import Hours from './Hours';
import Days from './Days';
import Blocks from "./Blocks";

const Table = ({selectedTask, tasks, editTask, color, selectedBlocks, setSelectedBlocks}) => {

	const [hoverBlock, setHoverBlock] = useState("");

	return (
		<div className="container table">
			<Hours hoverBlock={hoverBlock} />
			<Days hoverBlock={hoverBlock}  />
			<Blocks setHoverBlock={setHoverBlock} 
						selectedTask={selectedTask} 
						tasks={tasks}
						editTask={editTask}
						color={color}
						selectedBlocks={selectedBlocks} setSelectedBlocks={setSelectedBlocks} />
		</div>
	)
}

export default Table;
