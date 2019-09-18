document.addEventListener('DOMContentLoaded', function(){
  console.log('connected')
})

  let newTaskDescription = () => (
    document.querySelector('#new-task-description')
  )

  let submitButton = () => (
    document.getElementById('submit-btn')
  )

  let form = () => (
    document.getElementById('create-task-form')
  )

  form().addEventListener('submit',function(e){
    e.preventDefault()
    console.log('clicking submit')

    let taskList = document.getElementById('tasks')

    let newTask = (function(){return document.createElement('li')})()
    let taskDescriptionSpan = document.createElement('span')
    taskDescriptionSpan.innerText = newTaskDescription().value

    let delBtn = document.createElement('button')
    delBtn.innerText = "X"
    delBtn.addEventListener('click', (e)=>{
      console.log(e)
      debugger
      let taskToDelete = e.target.parentNode
      taskToDelete.remove()
      // on click of the button, this task will be removed

    })
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

    newTask.addEventListener('dblclick',(e)=>{
      debugger
      console.log("edit task")
      // change task description into a text field
      let textField = document.createElement('input')
      textField.value = taskDescriptionSpan.innerText
      newTask.replaceChild(textField, taskDescriptionSpan)
      textField.addEventListener('keypress', (e)=>{
        if(e.key === "Enter"){
          taskDescriptionSpan.innerText = textField.value
          newTask.replaceChild(taskDescription, textField)
        }
      })
    })
  })


// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)








// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
