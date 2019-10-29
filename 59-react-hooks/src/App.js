import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './Components/Form'
import TaskList from './Containers/TaskList'
import Joke from './Components/Joke'
import { Header } from 'semantic-ui-react'
import { useFetch } from './Hooks/useFetch'

const URL = 'http://localhost:3000/tasks'
const _ = require('lodash')

const App = () => {

  // state = {
  //   tasks: [],
  //   editingTask: {}
  // }

  // componentDidMount(){
  //   this.fetchTasks()
  //   const state = useState('')
  //   debugger
  // }

  const state = useState('')
  let tasksFetch = useFetch(URL, [])
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState({})
  const [stateChange, setStateChange] = useState(false)
  // const [joke, setJoke] = useState("")

  useEffect(() => {
    setTasks(tasksFetch)
  },[tasksFetch])

  // const fetchTasks = () => {
  //   fetch(URL)
  //   .then(r => r.json())
  //   .then(data => setTasks(data))
  // }

  const handleAddTask = (task) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        content: task
      })
    }
    fetch(URL, configObj)
    .then(r => r.json())
    .then(task =>
      setTasks([...tasks, task])
    )
  }

  const handleSubmit = (e, task) => {
    e.preventDefault()
    // debugger
    if(_.isEmpty(editingTask)){
      handleAddTask(task)
    } else {
      handleUpdateTask(task, editingTask.id)
    }
  }

  const handleRemoveTask = (taskId) => {
    fetch(URL+"/"+taskId, {method: "DELETE"})
    .then(handleDeleteTask(taskId))
  }

  const handleDeleteTask = (taskId) => {
    let updatedTasks = tasks.filter(t => t.id !== taskId)
    setTasks(updatedTasks)
  }

  const handleEditTask = (taskId) => {
    let editingTask = tasks.find(task => task.id === taskId)
    setEditingTask(editingTask)
  }

  const handleUpdateTask = (content, taskId) => {
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content
      })
    }
    // debugger
    fetch(URL+"/"+taskId, configObj)
    .then(r => r.json())
    .then((updatedTask) => {
      setTasks(tasks.map(task => task.id === updatedTask.id ? {...task, content: updatedTask.content} : task))
      setEditingTask({})
    })
  }

    return (
      <div className="App">
        <Header as="h2">TaskLister Lite 2.0</Header>
        <TaskForm handleAddTask={handleSubmit} editingTaskText={editingTask.content}/>
        <TaskList
          tasks={tasks}
          handleRemoveTask={handleRemoveTask}
          handleEditTask={handleEditTask}
        />
        <Joke />
      </div>
    )
}

export default App;
