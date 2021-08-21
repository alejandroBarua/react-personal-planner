import  React, { useState } from 'react';
import tasksList from "./helpers/tasksList";

import Header from "./components/Header";
import Input from "./components/Input";
import TasksGrid from './components/TasksGrid';


const App = () => {

	const [color, setColor] = useState("#000000");
  const [name, setName] = useState("");
	const [tasks, setTasks] = useState(tasksList);

	return (
		<>
			<Header title="Week Planner" />
			<Input color={color} name={name} setColor={setColor} setName={setName} setTasks={setTasks} />
			<TasksGrid color={color} name={name} tasks={tasks} setColor={setColor} setName={setName} setTasks={setTasks} />
		</>
	)

}

export default App;