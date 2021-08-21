import  React, { useState } from 'react';

import Header from "./components/Header";
import Input from "./components/Input";
import TasksGrid from './components/TasksGrid';

const App = () => {

	const [color, setColor] = useState("#000000");
  const [name, setName] = useState("")



	return (
		<>
			<Header title="Week Planner" />
			<Input color={color} name={name} setColor={setColor} setName={setName} />
			<TasksGrid color={color} name={name} />
		</>
	)

}

export default App;