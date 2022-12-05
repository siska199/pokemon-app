import "../components/header.js";
import "../components/pokemon-list";
import { getPokemons, getPokemon } from "../lib/utils.js";

const main = async () => {
  const searchElmn = document
    .querySelector("header-custome")
    .shadowDOM.querySelector("search-input");
  const pokemonListElmn = document.querySelector("pokemon-list");

  const handleSearchPokemons = async () => {
    try {
      pokemonListElmn.loadingState = true;
      const resultData = await getPokemons(30, searchElmn.valueSearchInput);
      pokemonListElmn.dataPokemons = resultData;
      pokemonListElmn.loadingState = false;
    } catch (error) {
      throw error.message;
    }
  };

  searchElmn.clickEvent = handleSearchPokemons;
  handleSearchPokemons()
};

export default main;
