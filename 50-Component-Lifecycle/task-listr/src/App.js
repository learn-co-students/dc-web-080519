import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    console.warn("Inside App's constructor")
    super()
    this.state = {
      formText: '',
      tasks: []
    }
  }

  componentDidMount(){
    console.warn("Inside App's componentDidMount")
    //great place to make GET fetches
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksData => {
      this.setState({tasks: tasksData})
    })
  }

  componentDidUpdate(){
    console.warn("Inside App's componentDidUpdate")
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    event.target.reset()
    fetch('http://localhost:3000/tasks', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      //update the state of tasks to include the newTask
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    })
  }

  //state change callback will update the state of tasks
  onDeleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.status === 200){
        console.log(res)
        let newTasks = this.state.tasks.filter(  (taskObj)=>{return taskObj.id !== id}  )
        this.setState({
          tasks: newTasks
        })
      }else{
        alert("Sorry, server is down")
      }
    }).catch(() => {
      alert("Sorry, server is down")
    })
  }

  render() {
    console.warn("Inside App's render")
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.tasks} onDeleteTask={this.onDeleteTask}/>
      </div>
    );
  }
}

export default App;
