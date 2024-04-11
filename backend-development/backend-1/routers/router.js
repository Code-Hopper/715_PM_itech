import express from "express"

import { home , about } from "../controllers/controller.js"

let router = express()

router.get("/",home)

router.get("/contact",(req,res)=>{
    console.log("welcome to contact page from router.js")
    res.send("welcome to contact page from router.js")
})

router.get("/services",(req,res)=>{
    console.log("welcome to services page from router.js")
    res.send("welcome to services page from router.js")
})

router.get("/about",about)


// their are 2 types of exports and imports
// named(export, import) and default(export, import)

// first step always has to be export

// syntax for default export
// export default data

// export default router
// a default export can export only one data at a time for a page

// syntax for named export
// export {data}

let a = 10
let b = 20

export { router , a , b }
// a named export can export multiple data at a time.

// each page has only one export statement