import React from 'react';
import './Options.css';
import html2pdf from 'html2pdf.js';


const Options = ({setTasks, setEditTask, setSelectedTask, setSelectedBlocks}) => {
	
	const cleanTable = () => setSelectedBlocks([]);

	const deleteTasks = () => {
		setTasks([]);
		setEditTask('');
		setSelectedTask('');
		cleanTable();
	}

	const downloadPDF = async() => {
		const $body = document.getElementById('download-container'),
			$days = document.querySelectorAll(".day"),
			$hours = document.querySelectorAll(".hour");

		$days.forEach($day => $day.style.color = "black");
		$hours.forEach($hour => $hour.style.color = "black");

		await html2pdf($body, {
												
												jsPDF: { 
																format: 'a4', 
																orientation: 'landscape',
												}
											});
											
		await $days.forEach($day => $day.style.color = "white");
		await $hours.forEach($hour => $hour.style.color = "white");

	}

	return (
		<div className="container options-container">
			<button className="btn" onClick={deleteTasks}>Delete Tasks</button>
			<button className="btn" onClick={cleanTable}>Clean Table</button>
			<button className="btn btn-download" onClick={downloadPDF} >Download PDF</button>
		</div>
	)
}

export default Options;
