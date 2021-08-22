import React, { useState } from 'react'

import './Table.css';
import Hours from './Hours';
import Days from './Days';
import Blocks from "./Blocks";

const Table = () => {

	const [selectedBlock, setSelectedBlock] = useState("");

	return (
		<div className="container table">
			<Hours selectedBlock={selectedBlock} />
			<Days selectedBlock={selectedBlock}  />
			<Blocks setSelectedBlock={setSelectedBlock} />
		</div>
	)
}

export default Table;
