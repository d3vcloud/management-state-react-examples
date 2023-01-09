import FormPokemon from './FormPokemon';
import { useStore } from './store';

useStore.getState().fetch()

const PokemonApp = () => {
  const pokemons = useStore(state => state.pokemons)
  return (
    <div>
      <h1>Lista de Pokemones</h1>
      <hr />
      <FormPokemon />
      <ul>
        {pokemons.map(pokemon => <li key={pokemon}>{pokemon}</li>)}
      </ul>
    </div>
  )
}

export default PokemonApp