import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks.map(taskObj => <Task
      key={taskObj.id}
      task={taskObj}
      onDeleteTask={props.onDeleteTask}
    />)
  )
}

export default TaskList
