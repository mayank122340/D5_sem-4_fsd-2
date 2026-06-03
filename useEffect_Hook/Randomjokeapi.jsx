import React,{ useState,useEffect } from 'react'
import axios from "axios";
const Randomjokeapi = () =>
{
    const[joke,setJoke]=useState('');
    function fetchJoke(){
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>{setJoke(response.data);})
        .catch((error)=>{console.error(error);})
    }
     useEffect(fetchJoke,[])
    return(
        <div>
        <h1>{joke.setup}</h1>
        <h3>{joke.punchline}</h3>
        <button onClick={fetchJoke} >Generate Joke </button>
        </div>
    )
}
export default Randomjokeapi
