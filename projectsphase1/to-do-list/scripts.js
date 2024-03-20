// collect form data

let form = $("#task")

// array to store all the task
let tasks = []

// each task will be a object 
// {
//     TaskName: "some name",
//     TaskTime: "some time",
//     TaskDetails: "some details"
// }

form.submit((event)=>{
    event.preventDefault()
    console.log(event)
})