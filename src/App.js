import logo from './logo.svg';
import './App.css';
import Display from './modules/Display';
import Fetch from './modules/Fetch';
import { useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const newPokemon = (pokemonsList) => {
    setPokemons(pokemonsList)
  }
  return (
    <div className="App">
      <Fetch newPokemon={newPokemon}/>
      <Display pokemons={pokemons}/> 
    </div>
  );
}

export default App;
