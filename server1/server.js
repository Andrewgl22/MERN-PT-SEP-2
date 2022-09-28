// Node  npm
// Express: framework for creating servers

// Nodemon for instant refresh
// nodemon server.js

const express = require('express')
const app = express()
const PORT = 8000

// app.get/post/put/delete (HTTP verb functions)
// app.listen (runs the server)
// app.use

const { faker } = require('@faker-js/faker')

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})

// Middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))






const createUser = () => {
    return {
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number(),
    }
}

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.name.fullName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country
        }
    }
}

app.get('/getAllUsers',(req,res)=>{
    res.json(users)
})


// localhost:8000/user
app.get('/user',(req,res)=>{
    console.log()
    const user = createUser()
    res.json(user)
})

app.get('/user/:word/:id',(req,res)=>{
    console.log(res)
    const word = req.params.word
    res.json(word)

    // const company = createCompany()
    // res.json(company)
})

app.post('/addUser',(req,res)=>{
    const user = createUser()
    users.push(user)
    res.json(user)
})

// put

// this is a placeholder for our database
const users = []

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    const newArr = users.map((user)=>{
        if(user._id === id){
            user.first_name = "Changed it"
            console.log("Updated the item")
        }
        return user
    })
    res.json(newArr)

})




// delete

app.delete('/deleteUser',(req,res)=>{
    
})






