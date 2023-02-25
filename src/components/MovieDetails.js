import React from 'react'
import {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import './MovieDetails.css'


function MovieDetails() {

    const params=useParams();
    console.log(params);
    
    const [movieDetails,setMovieDetails]=useState('');

    useEffect(()=>{
    fetch(` https://www.omdbapi.com/?apikey=99dba8b0&i=${params.id}`)
       .then((response)=>response.json()
       .then((data)=>{
        console.log(data);
        setMovieDetails(data);
       })
       )

    },[])

  return (
    <div className="movie1">
        <h1 className="movieDetailsHeader">IMDB MOVIES</h1>
        <div className="container">
        <div className="image1">
        <img  className="selected"src={movieDetails?.Poster} alt="Movie Poster"/>
        </div>
        <div className="details">
            <h2>{movieDetails?.Title}({movieDetails?.Year})</h2>
            <div className="movDet"><span>IMDB Rating:</span>{movieDetails?.imdbRating}</div>
            <div className="plot">{movieDetails?.Plot}</div>
            <div className="movDet"><span>Director:</span>{movieDetails?.Director}</div>
            <div className="movDet"><span>Cast:</span>{movieDetails?.Actors}</div>
            <div className="movDet"><span>Awards:</span>{movieDetails?.Awards}</div>
            <button className="watch">Watch Now</button>
        </div>
        </div>
    </div>
  )
}

export default MovieDetails
