let home = (req, res) => {
    // console.log("welcome to home page from controller.js")
    // res.send("welcome to home page from controller.js")

    // res.sendFile("index.html")

    res.render("index", { data: "this is some data from controller" })

}

let about = (req, res) => {
    // console.log("welcome to home page from controller.js")
    // res.send("welcome to home page from controller.js")

    // res.sendFile("about.html")

    let students = [
        {
            name: "amey Khondekar",
            roll: 1,
            city: "nagpur",
            marks: "500",
            subjects: ["maths","science","english"]
        }, {
            name: "Samay Raina",
            roll: 2,
            city: "pune",
            marks: "500",
            subjects: ["maths","science","english"]
        }, {
            name: "Rohit Khote",
            roll: 3,
            city: "nagpur",
            marks: "500",
            subjects: ["maths","science","english"]
        }, {
            name: "Abhishiek Raut",
            roll: 4,
            city: "Mumbai",
            marks: "500",
            subjects: ["maths","science","english"]
        }, {
            name: "Om pande",
            roll: 5,
            city: "nashisk",
            marks: "500",
            subjects: ["maths","science","english"]
        }, {
            name: "Sarvesh Yadav",
            roll: 6,
            city: "Lucknow",
            marks: "500",
            subjects: ["maths","science","english"]
        }
    ]

    res.render("about", {students})

}

export { home, about }