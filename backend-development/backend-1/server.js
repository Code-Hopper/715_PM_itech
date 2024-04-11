import express from "express"
import ejs from "ejs"

// set ejs as our main view engine

// deafult import syntax 
// import name from "location"

// import { data     } from "location"

import {  a , b , router } from "./routers/router.js"
// import { a } from "./routers/router.js"
// import { b } from "./routers/router.js"

let app = express()

// server the static files

app.use(express.static("./public"))

app.set("view engine" , "ejs")

console.log("value of a is " + a)
console.log("value of b is " + b)

app.use(router)
// this is a syntax to use custom models

app.listen(8000, () => {
    console.log(`Server is Running On Port 8000 , http://127.0.0.1:8000 !`)
})