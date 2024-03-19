const Data=require('./mongodb/mongo')
const mongoose=require('mongoose')
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
}).then(()=>console.log("...connected to DB"))
.catch((err)=>console.log(err))


app.post('/subscribe',async(req,res)=>{
    try{
        const newData = await Data.create(req.body);
        console.log("Data saved successfully:", newData);
        res.status(201).json(newData);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to subscribe email' })
        console.log("not sent - ",err )
      }
})

app.use(express.json())
app.listen(3000,()=>{
    console.log('...on port 3000')
})