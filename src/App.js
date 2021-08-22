import  React, { useState } from 'react';
import tasksList from "./helpers/tasksList";

import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TasksGrid from './components/tasks/TasksGrid';


const App = () => {

	const [color, setColor] = useState("#000000");
  const [name, setName] = useState("");
	const [tasks, setTasks] = useState(tasksList);
	const [selectedTask, setSelectedTask] = useState("");

	return (
		<>
			<Header title="Week Planner" />

			<Input color={color} setColor={setColor} 
						name={name}  setName={setName} 
						setTasks={setTasks} />

			<TasksGrid color={color} setColor={setColor} 
								name={name} setName={setName} 
								tasks={tasks} setTasks={setTasks}
								selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
		</>
	)

}

export default App;