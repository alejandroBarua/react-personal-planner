import React from 'react';
import './Options.css';


const Options = ({setTasks, setEditTask, setSelectedTask, setSelectedBlocks}) => {
	
	const cleanTable = () => setSelectedBlocks([]);

	const deleteTasks = () => {
		setTasks([]);
		setEditTask('');
		setSelectedTask('');
		cleanTable();
	}

	return (
		<div className="container options-container">
			<button className="btn" onClick={deleteTasks}>Delete Tasks</button>
			<button className="btn" onClick={cleanTable}>Clean Table</button>
			<button className="btn btn-download" onClick={() => {console.log('hello');}}>Download PDF</button>
		</div>
	)
}

export default Options;
