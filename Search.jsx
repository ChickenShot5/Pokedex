import React, {useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Search.css";

const Search = () => {

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [input, setInput] = useState("");

  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
    const data = await response.json();
    setPokemons(data);
  }
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect (() => {
    if (input === "") {
      setFilteredPokemons([]);
    } else {
    const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase()));
    setFilteredPokemons(filtered);
    }
  }, [input, pokemons]);

  return (
    <div>
    <h1>Search a Pokemon</h1>
    <input placeholder="Enter Pokemon name..." onChange={(e) => setInput(e.target.value)} />
    <ul>
    {filteredPokemons.map((pokemon, index) => (
      <PokemonCard key={index} pokemon= {pokemon} />
    ))}
    </ul>
    </div>
  );
};

export default Search;