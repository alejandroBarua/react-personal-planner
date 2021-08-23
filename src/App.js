import  React, { useState } from 'react';
import data from "./helpers/data";

import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TasksGrid from './components/tasks/TasksGrid';
import Table from "./components/table/Table";
import Options from "./components/options/Options";


const App = () => {

	const [color, setColor] = useState("#000000");
  const [name, setName] = useState('');
	const [tasks, setTasks] = useState(data);
	const [selectedTask, setSelectedTask] = useState('');
	const [editTask, setEditTask] = useState('');
	const [selectedBlocks, setSelectedBlocks] = useState([]);

	return (
		<>
			<Header title="Week Planner" />

			<Input color={color} setColor={setColor} 
						name={name}  setName={setName} 
						setTasks={setTasks}
						setSelectedTask={setSelectedTask}
						editTask={editTask}
						setEditTask={setEditTask}
						selectedTask={selectedTask}
						setSelectedBlocks={setSelectedBlocks} 
			/>

			<TasksGrid color={color} setColor={setColor} 
								name={name} setName={setName} 
								tasks={tasks} setTasks={setTasks}
								selectedTask={selectedTask} setSelectedTask={setSelectedTask}
								setEditTask={setEditTask} 
			/>

			<Table selectedTask={selectedTask} 
						tasks={tasks}
						editTask={editTask}
						color={color}
						selectedBlocks={selectedBlocks} setSelectedBlocks={setSelectedBlocks} 
			/>

			<Options setTasks={setTasks}
							setEditTask={setEditTask}
							setSelectedTask={setSelectedTask}
							setSelectedBlocks={setSelectedBlocks}
			 />
		</>
	)

}

export default App;