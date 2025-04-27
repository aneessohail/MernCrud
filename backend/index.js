const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userrouter = require('./router/user')
const { connectdb } = require('./connectdb')
const PORT = 3000
const app = express()
dotenv.config()
const corsoptions = {
    origin:process.env.VITE_FRONTEND_URL,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
}

app.use(cors(corsoptions))
app.use(express.json())
app.use('/api/v1',userrouter)
const url = process.env.MONGODB_URL
connectdb(url).then(()=>{
    console.log('Database Connected Successfully')
}).catch((error)=>{
    console.log(error)
})

app.listen(PORT,()=>{
    console.log(`The Server is running on Port ${PORT}`)
})