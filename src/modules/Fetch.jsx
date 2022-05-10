import React from 'react'
import axios from 'axios';
const Fetch = (props) => {
    const getPokemon = async()=>{
        
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=898");
        console.log(response.data.results);
        props.newPokemon(response.data.results)
    }
  return (
    <div>
    <button onClick={getPokemon}>Fetch Pokemon</button>
</div>
  )
}

export default Fetch