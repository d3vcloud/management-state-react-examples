import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import PokemonDetails from "./PokemonDetails";

const pokemonState = atom({
  key: 'pokemonState',
  default: selector({
    key: 'pokemonSelector',
    get: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      let data = await response.json()
      data = data.results.map(pokemon => pokemon.name)
      return data
    }
  })
})

export const pokemonSelectedState = atom({
  key: 'pokemonSelectedState',
  default: '' // pokemon nombre
});

export const pokemonDetailState = selector({
  key: 'pokemonDetailState',
  get: async({get}) => {
    const pokemonSelected = get(pokemonSelectedState);
    if(pokemonSelected) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);
      const data = await response.json();
      return data;
    }
    return {}
  }
});
const Main = () => {
  const [pokemonData, setPokemonData] = useRecoilState(pokemonState)
  const setPokemonSelected = useSetRecoilState(pokemonSelectedState);
  const handleSubmit = (e) => {
    e.preventDefault()
    const pokemonName = e.currentTarget.pokemonName.value
    setPokemonData(pokemons => [pokemonName, ...pokemons])
    e.currentTarget.pokemonName.value = ''
  }
  return (
    <>
      <h1>Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='pokemonName' placeholder='name...' autoFocus />
      </form>
      <ul>
        {pokemonData.map(pokemon => (
          <li key={pokemon}>
            <span>{pokemon}</span>
            <button onClick={() => setPokemonSelected(pokemon)}>Ver detalle</button>
          </li>
        ))}
      </ul>
      <hr />
      <PokemonDetails />
    </>
  );
}

export default Main