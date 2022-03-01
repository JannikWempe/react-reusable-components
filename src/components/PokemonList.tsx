import React from "react";
import { Pokemon } from "../api/pokemon";
import { List } from "./List";


type Props = {
  pokemons: Pokemon[];
};

export function PokemonList({ pokemons }: Props) {
  return (
    <List
      items={pokemons}
      renderItem={(pokemon) => (
        <li key={pokemon.name}>
          <a href={pokemon.url} target="_blank" rel="noreferrer">
            {pokemon.name}
          </a>
        </li>
      )}
    />
  );
}
