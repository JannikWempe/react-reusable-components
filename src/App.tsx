import React from "react";
import { getPokemons } from "./api/pokemon";
import { PokemonList } from "./components/PokemonList";

function App() {
  const pokemons = getPokemons(); // returns some fix dummy data

  return (
    <PokemonList pokemons={pokemons} />
  );
}

export default App;
