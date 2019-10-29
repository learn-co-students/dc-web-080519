import React, { useEffect } from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'

const Task = (props) => {

  // componentWillUnmount(){
  //   Swal.fire(
  //   'Success',
  //   'Task Deleted',
  //   'success'
  // )
  // }
  useEffect(()=>{
    return () => {
      Swal.fire(
       'Success',
       'Task Deleted',
       'success'
      )
    }
  },[])

    return(
      <List.Item className="task-item">
        <List.Content floated="right">
          <Icon name="edit" onClick={() => {props.handleEditTask(props.task.id)}}/>
          <Icon name="delete" onClick={() => {props.handleRemoveTask(props.task.id)}}/>
        </List.Content>
        <List.Content className="task-text">{props.task.content}</List.Content>
      </List.Item>
    )
}

export default Task
