const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Andrewgl:DXSosfHI7fYSuqa3@cluster0.4qha5k5.mongodb.net/userdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log('Successfully connected to db')
}).catch((err)=>{
    console.log('Something went wrong when connecting to db')
})

