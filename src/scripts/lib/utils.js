export const baseURL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit, search) => {
  const url = `?limit=${limit}`;
  const res = await fetch(`${baseURL}${url}`).then((res) => res.json());

  const pokemons = [];

  res.results.forEach((data) => {
    pokemons.push(getPokemon(data.name));
  });

  const completDataPokemons = await Promise.all(pokemons);
  const finalResults = search
    ? completDataPokemons.filter((data) => data.name.includes(search))
    : completDataPokemons;
  return finalResults;
};

export const getPokemon = async (param) => {
  const res = await fetch(`${baseURL}/${param}`).then((res) => res.json());
  return res;
};
