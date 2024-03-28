let express = require("express")

let app = express()

app.get("/",(req,res)=>{
    res.send("hello from server !")
})

app.get("/contact",(req,res)=>{
    res.send("hello from server on contact !")
})

app.get("/about",(req,res)=>{
    res.send("hello from server on about !")
})

app.listen(8000,()=>{
    console.log(`Server is Running On Port 8000 , http://127.0.0.1:8000 !`)
})