import React, {useState} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/hit-removebg-preview.png'
import doingIcon  from './assets/star-removebg-preview.png'
import doneIcon from './assets/check-removebg-preview.png'


const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);


const App = () => {
  const [tasks, setTasks] = useState([])
 
  const handleDelete = (taskIndex) =>{
    const newTasks = tasks.filter((task , index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title="ToDO" icon={todoIcon} tasks = {tasks} status = "todo" handleDelete ={handleDelete}/>
        <TaskColumn title="Doing" icon={doingIcon} tasks = {tasks} status = "doing" handleDelete ={handleDelete}/>
        <TaskColumn title="Done" icon={doneIcon} tasks = {tasks} status = "done"  handleDelete ={handleDelete}/>
      </main>
    </div>
  )
}

export default App
