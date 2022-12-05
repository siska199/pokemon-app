import "../components/header.js";
import "../components/pokemon-list";
import { getPokemons, getPokemon } from "../lib/utils.js";

const main = async () => {
  const searchElmn = document.querySelector("search-input");
  const pokemonListElmn = document.querySelector("pokemon-list");

  const dataPokemons = await getPokemons(30, "");

  pokemonListElmn.dataPokemons = dataPokemons;
};

export default main;
