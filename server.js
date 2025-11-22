import express from 'express'

const app = express()

const port  = 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        message :"home page"
    })
})



app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
    
})