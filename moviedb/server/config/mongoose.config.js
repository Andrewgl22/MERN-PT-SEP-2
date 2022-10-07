const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/moviedb3456',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Movie DB")
}).catch((err)=>{
    console.log(err)
})