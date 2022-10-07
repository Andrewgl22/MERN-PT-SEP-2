const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,

    },
    director:{
        type:String
    },
    rating:{
        type:String,
        enum: ['G','PG','PG-13','R','NC-17']
    },
    genre:{
        type:String,
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
        type:Number
      },
      duration:{
        type:String
      },
      boxArt:{
        type:String
      }
},{timestamps:true})

const Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie


