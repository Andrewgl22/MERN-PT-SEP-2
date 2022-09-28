const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8000

// these middleware functions allow us to add post data 
// into our requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost/testdb',()=>{
    console.log('Connected to MongoDB')
})

// MongoDB Schema --> MongoDB Model

const UserSchema = mongoose.Schema({
    name:String,
    age:Number,
    developer:Boolean
})

const User = mongoose.model('User',UserSchema)

app.post('/api/addUser',(req,res)=>{
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/api/allUsers',(req,res)=>{
    User.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })

})


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
