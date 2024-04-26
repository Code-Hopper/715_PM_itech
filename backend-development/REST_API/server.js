import express from "express"
// environment variables
import dotenv from "dotenv"
import { router } from "./routers/router.js"

// configure dotenv
dotenv.config({ path: "./config.env" })

let app = express()

let port = process.env.PORT

// set app to read json data recieved from client 
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port} !`)
})