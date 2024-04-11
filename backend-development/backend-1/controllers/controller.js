let home =(req,res)=>{
    // console.log("welcome to home page from controller.js")
    // res.send("welcome to home page from controller.js")

    // res.sendFile("index.html")

    res.render("index",{data: "this is some data from controller"})

}

let about =(req,res)=>{
    // console.log("welcome to home page from controller.js")
    // res.send("welcome to home page from controller.js")

    // res.sendFile("about.html")

    res.render("about")

}

export {home , about}