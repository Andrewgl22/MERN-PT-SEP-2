const express = require('express')
const app = express()
const PORT = 8000
// require configuration file
require('./config/mongoose.config')

// Middleware for formatting and allowing POST requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import routes
const Routes = require('./routes/movie.routes')
Routes(app)

// this is equivalent
// require('./routes/movie.routes')(app)


app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`)
})
