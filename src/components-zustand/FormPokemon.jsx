import { useStore } from './store'

const FormPokemon = () => {
  const addPokemon = useStore(state => state.addPokemon)

  const handleSubmit = (e) => {
    e.preventDefault()
    const pokemonName = e.currentTarget.pokemonName.value;
    addPokemon(pokemonName)
    e.currentTarget.pokemonName.value = ''
  }

  return (
    <>
      <h2>Form Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='pokemonName' autoFocus />
      </form>
    </>
  );
}

export default FormPokemon