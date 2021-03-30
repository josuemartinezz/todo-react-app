import React, { useState } from 'react'
import Input from './components/ui/Input.jsx'
import Task from './components/ui/Task'
import { stringGenerator } from './utils/index'

const App = () => {

  const [task, setTask] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    if (event.key === 'Enter') {
      if (task) {
        event.target.value = ''
        setTask('');
        setTasks([...tasks, { id: stringGenerator(), task, status: false }])
      }
    }
  }

  const deleteTask = (id) => {
    const taskToDelete = tasks.filter((el) => el.id !== id)
    setTasks([...taskToDelete])
  }

  const UpdateTask = (id) => {
    let editTask = tasks.map((el) => ({ ...el, status: el.id === id ? el.status = !el.status : el.status }));
    setTasks(editTask)
  }

  return (
    <div className="h-screen max-w-xs sm:max-w-lg lg:max-w-lg mx-auto items-center grid container">
      <div className="space-y-2">
        <Input name="task" onKeyDown={addTask} handle={(val) => setTask(val)} placeholder="Add new task..." />
        <div className="max-h-96 overflow-auto space-y-2">
          {tasks.map((el) => <Task update={() => UpdateTask(el.id)} del={() => deleteTask(el.id)} status={el.status} key={el.id}>{el.task}</Task>)}
        </div>
      </div>
    </div>
  );
}

export default App;
