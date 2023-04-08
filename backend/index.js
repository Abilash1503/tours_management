import  express  from "express";
import dotenv from 'dotenv'
import mangoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'

dotenv.config()
const app= express()
const port = process.env.PORT || 8000;

mangoose.set('strictQuery',false)
const connect= async()=>{
    try {
        await mangoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log("monogodb database connected")
    } catch (err) {
      console.log('mongodb database failed')  
    }
}


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours',tourRoute)



app.listen(port,()=>{
    connect()
    console.log("server listening on port",port)
})