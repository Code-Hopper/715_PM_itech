import express from "express"
let router = express()
import {home,postHome} from "../controllers/controller.js"

router.get("/",home)
// router.post("/",home)

router.post("/",postHome)

export { router }