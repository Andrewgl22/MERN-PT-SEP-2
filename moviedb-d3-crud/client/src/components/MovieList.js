import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <div className="d-flex flex-wrap">
            {
                list.map((movie)=>(
                    <div className="col col-4 mt-3">
                        <img src={movie.boxArt} className="col-6 border border-5 border-warning"/><br></br>
                        <Link to={`/onemovie/${movie._id}`}>{movie.title}</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList