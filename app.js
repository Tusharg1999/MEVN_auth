const express=require('express')
const passport=require('passport')
const db=require('mongoose')
const cors=require('cors')
const path=require('path')
const routes=require('./routers/api/routes')
const app=express()
const PORT=process.env.PORT||5000
//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
//passporjs
app.use(passport.initialize())
require('./config/passport')(passport)
//database cnnection
db.connect(require("./config/keys").mongoUri,{useNewUrlParser:true})
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

//routes
app.use('/api/users',routes)
// app.use(cors)
app.listen(PORT)

