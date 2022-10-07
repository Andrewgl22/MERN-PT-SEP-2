const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required!"], 
        minLength:[2,"Must be at least 2 characters!"],
        maxLength:[10,"Must be less than 10 characters"]
    },
    director:{
        type:String,
        required:[true,"Director is required!"]
    },
    rating:{
        type:String,
        required:[true,"Rating is required!"],
        enum: ['G','PG','PG-13','R','NC-17']
    },
    genre:{
        type:String,
        required:[true,"Genre is required!"],
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime Noir',
            'French Cinema',
            'Horror/Comedy',
            'Kung-Fu',
            'Bollywood'
          ],
    },
    releaseYear:{
      required:[true,"Release year is required!"],
        type:Number
      },
      duration:{
        required:[true,"Duration is required!"],
        type:String
      },
      boxArt:{
        required:[true,"Image is required!"],
        type:String
      }
},{timestamps:true})

const Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie


