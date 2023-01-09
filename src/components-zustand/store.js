import create from 'zustand';
import { createCounterSlice } from './slices/counterSlice';
import { createPokemonSlice } from './slices/pokemonSlice';

export const useStore = create((...a) => ({
  ...createCounterSlice(...a),
  ...createPokemonSlice(...a)
}));
