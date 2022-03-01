import React from "react";
import { Pokemon } from "../api/pokemon";


type Props = {
  pokemons: Pokemon[];
};

export function InitialPokemonList({ pokemons }: Props) {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <a href={pokemon.url} target="_blank" rel="noreferrer">
            {pokemon.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
