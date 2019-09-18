document.addEventListener('DOMContentLoaded', function(){
  console.log('connected')
  // initialized with event listener on form
  form().addEventListener('submit', handleSubmitForm)
})

// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

// **STRETCH FEATURES**
// - A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, orange for medium, green for low)
// - Ability to edit tasks

// Selected Elements
const newTaskDescription = () => (
  document.querySelector('#new-task-description')
)

const submitButton = () => (
  document.getElementById('submit-btn')
)

const form = () => (
  document.getElementById('create-task-form')
)

// Event Handlers
const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('clicking submit')

    let taskList = document.getElementById('tasks')

    let newTask = (function(){return document.createElement('li')})()
    let taskDescriptionSpan = document.createElement('span')
    taskDescriptionSpan.innerText = newTaskDescription().value

    let delBtn = document.createElement('button')
    delBtn.innerText = "X"
    delBtn.addEventListener('click', handleDeleteBtn)
    newTask.append(taskDescriptionSpan, delBtn)

    let prioritySelect = document.getElementById('priority-select')

    // if(prioritySelect.value === "high"){
    //   newTask.style.color = "red"
    // } else if (prioritySelect.value === "medium"){
    //   newTask.style.color = "orange"
    // } else if(prioritySelect.value === "low"){
    //   newTask.style.color = "green"
    // }

    taskList.appendChild(newTask)
    newTask.style.color = prioritySelect.value

    // debugger
    event.target.reset()

    newTask.addEventListener('dblclick', () => {handleEditTask(taskDescriptionSpan, newTask)})
}

const handleEditTask = (taskDescriptionSpan, newTask)=>{
  // debugger
  console.log("edit task")
  // change task description into a text field
  let textField = document.createElement('input')
  textField.value = taskDescriptionSpan.innerText
  newTask.replaceChild(textField, taskDescriptionSpan)
  textField.addEventListener('keypress', (e) => {handleUpdateTask(e, taskDescriptionSpan, newTask)})
  //note that the NEW event has to be passed in as an argument to the callback otherwise the ORIGINAL event will be passed to the handler
}

const handleUpdateTask = (e, taskDescriptionSpan, newTask) => {
  debugger
  if(e.key === "Enter"){
    // let taskDescriptionSpan = document.createElement('span')
    let textField = e.target
    // let newTask = e.target.parentNode
    taskDescriptionSpan.innerText = textField.value
    newTask.replaceChild(taskDescriptionSpan, textField)
  }
}

const handleDeleteBtn = (e) => {
  // on click of the button, this task will be removed
  let taskToDelete = e.target.parentNode
  taskToDelete.remove()
}
