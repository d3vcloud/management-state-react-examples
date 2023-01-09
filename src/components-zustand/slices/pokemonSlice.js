export const createPokemonSlice = set => ({
  pokemons: [],
  fetch: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    data = data.results.map(pokemon => pokemon.name);
    set({ pokemons: data });
  },
  addPokemon: pokemon =>
    set(state => ({ pokemons: [pokemon, ...state.pokemons] }))
});
