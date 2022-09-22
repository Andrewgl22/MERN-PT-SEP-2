// Node  npm
// Express: framework for creating servers

// Nodemon for instant refresh
// nodemon server.js

const express = require('express')
const app = express()
const PORT = 8000

const { faker } = require('@faker-js/faker')

app.listen(PORT,()=>{
    console.log(`Changed Something is up and running on port ${PORT}`)
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
        phone_number:faker.phone.number()
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


app.get('/user',(req,res)=>{
    console.log()
    const user = createUser()
    res.json(user)
})

app.get('/user/:word',(req,res)=>{
    const word = req.params.word
    res.json(word)

    // const company = createCompany()
    // res.json(company)
})

app.post('/addUser',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})




