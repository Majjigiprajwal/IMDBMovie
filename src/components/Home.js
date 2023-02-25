import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import {useEffect,useState} from 'react'
import './Search.css';
import MovieCard from './MovieCard';
import './Home.css';

function Home() {

    const[movieData,setMovieData]=useState([]);
    const[searchedValue,setSearchedValue]=useState('');
    
      const searchMovie=()=>{
       fetch(`https://www.omdbapi.com/?apikey=99dba8b0&s=${searchedValue}`)
       .then((response)=>response.json()
       .then((data)=>{
        setMovieData(data.Search);
       })
       )

    }
    
  return (
    <div className="App">
      <Navbar />
      <div className="searchMovie">
      <p className="header">Search For Movies By Their Title</p>
      <div className="inputContainer">
      <input type="text" placeholder='search...'  onChange={(e)=>{
        setSearchedValue(e.target.value)
      }}  />
      <button onClick={searchMovie} className="searchButton">Search Now!</button>
      </div>
    </div>
    `<p className="resultHeader">Movie Results For {searchedValue} </p>`
    <div className="movieResult">
      {movieData?.map((movie)=>{
        return (
        <MovieCard key="movie.imdbID" id={movie.imdbID} title={movie.Title} type={movie.Type} year={movie.Year} poster={movie.Poster} />
             
      )})}
    </div>
    </div>
  )
}

export default Home
