import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'

const TaskForm = (props) => {

  // state = {
  //   description: ""
  // }

  const [description, setDescription] = useState("")

  useEffect(() => {
      setDescription(props.editingTaskText)
      console.log('task content updated to ', props.editingTaskText);
  },[props.editingTaskText])

  // componentDidUpdate(prevProps){
    // if(this.props.taskToEdit !== prevProps.taskToEdit){
  //   this.setState({ description: this.props.taskToEdit})
  //   }
  // }

  const handleSubmit = (e) => {
    props.handleAddTask(e, description)
    setDescription("")
  }

    return(
      <Form id="main-content" onSubmit={handleSubmit}>
          <Form.Input label="Task Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <Button type="submit" content="Submit"/>
      </Form>
    )
}

export default TaskForm
