import express from 'express'

const app = express()

const port  = 5000

app.listen(port,(req,re)=>{
    console.log("the server is running");
    
})