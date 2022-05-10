import React from 'react'

const Display = (props) => {

  return (
    <div>
        {props.pokemons.map((pokemon, index)=>
        <div key={index}>{pokemon.name}</div>)}
    </div>
  )
}

export default Display