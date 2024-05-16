import express from "express"
let router = express()
import { displayAllLanguages, displayRandomLanguage, filterLanguages, searchedId } from "../controllers/controller.js"
import { auth } from "../models/auth.js"

router.get("/", displayAllLanguages)

router.get("/random", displayRandomLanguage)

router.get("/filteredLanguages", filterLanguages)

// params are forced to the user to send the data for futher oprations

// query parameter
// path paramerts or params 

router.get("/:key/:languagename", auth, searchedId)

export { router }