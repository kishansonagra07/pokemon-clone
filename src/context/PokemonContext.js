import { createContext, useReducer } from 'react';
import pokemonReducer from './PokemonReducer';

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const initialState = {
    allPokemons: JSON.parse(localStorage.getItem('allPokemons')) ? JSON.parse(localStorage.getItem('allPokemons')) : [],
    url: "https://pokeapi.co/api/v2/pokemon?limit=20&offet=0",
    sorting:"asc",
    loading: false
  }
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext