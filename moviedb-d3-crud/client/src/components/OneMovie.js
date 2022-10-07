import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const OneMovie = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [movie,setMovie] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res)=>{
            setMovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            console.log('Deleted from db')
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
        })
    }



  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.boxArt} className="col col-3 mx-auto" />
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.rating}</p>
        <p>Genre: {movie.genre}</p>
        <button className="btn btn-info m-1"><Link to={`/edit/${movie._id}`} style={{textDecoration:"none"}}>Edit Movie</Link></button>
        <button className="btn btn-danger" onClick={(e)=>deleteHandler(movie._id)}>Delete Movie</button>
    </div>
  )
}

export default OneMovie