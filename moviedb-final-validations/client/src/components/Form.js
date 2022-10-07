import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [rating,setRating] = useState('')
    const [genre,setGenre] = useState('')
    const [releaseYear,setReleaseYear] = useState('')
    const [duration,setDuration] = useState('')
    const [image,setImage] = useState('')
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()


  
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addMovie',{
            title,
            director,
            rating,
            genre,
            releaseYear,
            duration,
            boxArt:image
        }).then((res)=>{
            console.log("From catch on back",res)
            navigate('/movielist')
        }).catch((err)=>{
            console.log("In Catch on Front",err)
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div className="col-6 mx-auto">
        <form onSubmit={submitHandler}>
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
            { errors.title ? <span className="text-danger">{errors.title.message}</span> : null}<br></br>
            <label className="form-label">Director</label>
            <input type="text" className="form-control" value={director} onChange={(e)=>setDirector(e.target.value)} />
            { errors.director ? <span className="text-danger">{errors.director.message}</span> : null}<br></br>
            <label className="form-label">Rating:</label>
            <select className="form-control" value={rating} onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            { errors.rating ? <span className="text-danger">{errors.rating.message}</span> : null}<br></br>
            <label className="form-label">Genre:</label>
            <select type="text" name="genre" className="form-control" value={genre} onChange={(e)=>setGenre(e.target.value)} >
                <option>Select a Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Action">Action</option>
                <option value="Family">Family</option>
                <option value="Animated">Animated</option>
                <option value="Documentary">Documentary</option>
                <option value="Romcom">Romcom</option>
                <option value="Silent Movie">Silent Movie</option>
                <option value="Thriller">Thriller</option>
                <option value="Crime Noir">Crime Noir</option>
                <option value="French Cinema">French Cinema</option>
            </select>
            <label className="form-label">Release Year:</label>
            <input type="number" className="form-control" value={releaseYear} onChange={(e)=>setReleaseYear(e.target.value)} />
            { errors.releaseYear ? <span className="text-danger">{errors.releaseYear.message}</span> : null}<br></br>
            <label className="form-label">Duration:</label>
            <input type="text" className="form-control" value={duration} onChange={(e)=>setDuration(e.target.value)} />
            { errors.duration ? <span className="text-danger">{errors.duration.message}</span> : null}<br></br>
            <label className="form-label">Image:</label>
            <input type="text" className="form-control" value={image} onChange={(e)=>setImage(e.target.value)} />
            { errors.boxArt ? <span className="text-danger">{errors.boxArt.message}</span> : null}<br></br>
            <button type="submit" className="btn btn-info mt-3">Create Movie</button>
        </form>
    </div>
  )
}

export default Form