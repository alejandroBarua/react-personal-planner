import React from 'react'

import './Table.css';
import Hours from './Hours';
import Days from './Days';
import Blocks from "./Blocks";

const Table = () => {
	return (
		<div className="container table">
			<Hours />
			<Days />
			<Blocks />
		</div>
	)
}

export default Table;
