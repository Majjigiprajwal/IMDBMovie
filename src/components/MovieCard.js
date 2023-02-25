import React from 'react'
import './MovieCard.css'
import { NavLink } from 'react-router-dom'

function MovieCard(props) {

    const movieDetails=()=>{

    }
  return (
    <div className="card">
    <img  className="image"src={props.poster} alt="Movie Poster"/>
    <div className="details">
    <div className="title">Title :{props.title}</div>
    <div className="text">Type :{props.type}</div>
    <div className="text">Year :{props.year}</div>
    </div>
    <button onClick={movieDetails} className="knowmore" ><NavLink style={{textDecoration:'none',color:'black'}}to={"/movies/"+props.id}>Know More</NavLink></button>
  </div>
  )
}

export default MovieCard
