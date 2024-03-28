import express from "express"

// deafult import syntax 
// import name from "location"

import router from "./routers/router.js"

let app = express()

app.use(router)
// this is a syntax to use custom models

app.listen(8000,()=>{
    console.log(`Server is Running On Port 8000 , http://127.0.0.1:8000 !`)
})