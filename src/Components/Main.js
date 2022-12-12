import { useEffect, useState } from "react";
import { capitalizeFirstLetter, shufflePokemon } from "../utils.js";
import CardsGrid from "./CardsGrid/CardsGrid.js";
import ScoreBoard from "./ScoreBoard/ScoreBoard.js";

const Main = () => {
  const POKEMON_QUANTITY = 9;
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const loadPokemon = async () => {
      setPokemon(shufflePokemon(await fetchPokemons(POKEMON_QUANTITY)));
    };

    loadPokemon();
  }, []);

  // Fetch Pokemon
  const fetchPokemons = async (amount) => {
    const pokemons = [];

    for (let i = 1; i <= amount; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokemonUrl);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = capitalizeFirstLetter(pokemon.name);
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }

    return pokemons;
  };

  return (
    <div>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardsGrid pokemon={pokemon} />
    </div>
  );
};

export default Main;
