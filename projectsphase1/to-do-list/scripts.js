$(document).ready(() => {

    // craeting variables to extract data from a form using JQ

    let taskName, taskTime, taskDisc = ""

    // we will create a object of this data to add it in a array

    let taskObject = {}

    // a array containing all task objects

    let tasks = []

    $("#taskForm").submit((event) => {
        event.preventDefault()

        // console.log(event)

        taskName = $('[name=taskName]').val()
        taskTime = $('[name=taskTime]').val()
        taskDisc = $('[name=taskDetails]').val()

        taskObject = {
            name: taskName,
            time: taskTime,
            details: taskDisc,
            taskId: null
        }

        console.log(taskObject)

        if(tasks.length < 1){
            taskObject.taskId = 1
        }else{
            taskObject.taskId = tasks.length + 1
        }

        tasks.push(taskObject)

        console.log(tasks)

        // now append each child into html page of array

        $('#display-all-task').append(() => {
            return (
            `
              <div id="card-${taskObject.taskId}" class="card my-3 task">
                  <div class="card-header">
                      <h1 class="card-title">${taskObject.name}</h1>
                      <button onClick="doneTask(${taskObject.taskId})" class="btn btn-success">Done <i class="fa-solid fa-check"></i> </button>
                      <button onClick="deleteTask(${taskObject.taskId})" class="btn btn-danger">Delete <i class="fa-solid fa-trash"></i></button>
                  </div>
                  <div class="card-body">
                      <p class="card-text">${taskObject.details}</p>
                      <h4>${taskObject.time}</h3>
                  </div>
              </div>
            `
            )
        })
    })
})

function doneTask(taskId) {
    console.log(taskId)
    $(`#card-${taskId}`).css("textDecoration", "line-through")
}

function deleteTask(taskId) {
    // we will filter the array which contains all the tasks that are maped 
    $(`#card-${taskId}`).css("display", "none")
}