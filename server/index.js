import express from 'express'
import mongoose from "mongoose";
import router from "./routes/index.js";
mongoose.connect('mongodb+srv://admin:12345@cluster0.wmd3fu8.mongodb.net/taskManager?retryWrites=true&w=majority')
    .then(() => {console.log('DB ok')})
    .catch((err) => {console.log('DB err', err)})

const app = express()

app.use(express.json())
app.use('/api',router)

app.listen(8008,(err)=> {
    if(err){
        return console.log(err)
    }

    console.log('server start 8008')
})