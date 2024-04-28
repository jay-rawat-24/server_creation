const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")

const app = express()
const port = 5000;
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.json())// this line is for  api testing only

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.post("/api/v2/login",(req,res)=>{
    res.send("<h1>thanks for login the form</h1>")
    console.log(req.body)
})

app.listen(port,()=>{
    console.log(`server is runnning on ${port}`)
})        


//api create
app.get("/api/v2/login", (req,res) => {
    res.json({
        name:"jayaditya",
        collegeName:"jims",
        email:"wariorninjs2345@gmail.com",
        password:"rawat"
    })
})
app.post("/api/v3/binod",(req,res)=>{
    const userName = req.body.name
    const userEmail = req.body.email
    const userAddress = req.body.address

    res.json({
        success:true,
        name:userName,
        email:userEmail,
        address:userAddress
    })
})
style="display:flex,align-items:center"    

// get-read
// post-create