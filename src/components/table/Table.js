import React, { useState } from 'react'

import './Table.css';
import Hours from './Hours';
import Days from './Days';
import Blocks from "./Blocks";

const Table = ({selectedTask}) => {

	const [hoverBlock, setHoverBlock] = useState("");

	return (
		<div className="container table">
			<Hours hoverBlock={hoverBlock} />
			<Days hoverBlock={hoverBlock}  />
			<Blocks setHoverBlock={setHoverBlock} selectedTask={selectedTask} />
		</div>
	)
}

export default Table;
