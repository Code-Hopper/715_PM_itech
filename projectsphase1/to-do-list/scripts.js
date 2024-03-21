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
            details: taskDisc
        }

        console.log(taskObject)

        tasks.push(taskObject)

        console.log(tasks)

        // now append each child into html page of array

        $('#display-all-task').append(() => {
            return (

                tasks.map((task) => {

                    return (
                        `
                        <div class="card my-3">
                            <div class="card-header">
                                <h1 class="card-title">${task.name}</h1>
                                <button class="btn btn-success">Done <i class="fa-solid fa-check"></i> </button>
                                <button class="btn btn-danger">Delete <i class="fa-solid fa-trash"></i></button>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${task.details}</p>
                                <h4>${task.time}</h3>
                            </div>
                        </div>
                        `
                    )

                })

            )
        })

    })

})