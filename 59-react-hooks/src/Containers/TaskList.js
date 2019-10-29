import React from 'react'
import Task from '../Components/Task'
import { List, Container, Icon } from 'semantic-ui-react'

class TaskList extends React.Component{
  render(){
    return(
      <Container id="task-container">
        <List relaxed divided verticalAlign='middle'>
          {this.props.tasks.map(task =>
            <Task
              task={task}
              handleRemoveTask={this.props.handleRemoveTask}
              handleEditTask={this.props.handleEditTask}/>)}
        </List>
      </Container>
    )
  }
}

export default TaskList
