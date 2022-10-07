const express = require('express')
const app = express()
const PORT = 8000

// these middleware functions allow us to add post data 
// into our requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// require the configuration file that connects to db
require('./config/mongoose.config')

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})
