import express from "express"
let router = express()
import {displayAllLanguages , displayRandomLanguage , filterLanguages} from "../controllers/controller.js"

router.get("/",displayAllLanguages)

router.get("/random",displayRandomLanguage)

router.get("/filteredLanguages",filterLanguages)

export { router }