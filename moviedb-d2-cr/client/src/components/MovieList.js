import React,{useState, useEffect} from 'react'
import axios from 'axios'

const MovieList = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allMovies')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


  return (
    <div className="flex-wrap">
        <h1>Movie List</h1>
        {
            list.map((movie)=>(
                <div className="col col-4 mt-3">
                    <img src={movie.boxArt} className="col-6"/>
                    <h2>{movie.title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default MovieList