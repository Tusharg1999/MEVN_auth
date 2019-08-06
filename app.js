const express=require('express')
const db=require('mongoose')
const cors=require('cors')
const path=require('path')
const routes=require('./routers/api/routes')
const app=express()
const PORT=process.env.PORT||5000
//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors)
app.use(express.static(path.join(__dirname,'public')))
//database cnnection
db.connect(require("./config/keys").mongoUri,{useNewUrlParser:true})
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

//routes
app.use('/api/users',routes)

app.listen(PORT)