const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POKEMON':
            localStorage.removeItem('allPokemons');
            localStorage.setItem('allPokemons', JSON.stringify([...state.allPokemons,...action.payload.result]));
            return {
                ...state,
                url:action.payload.nextUrl,
                allPokemons: [...state.allPokemons,...action.payload.result],
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'SET_SORTING':
            if(action.payload === 'desc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
                }
            }
            if(action.payload === 'a_z'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort((a,b) => a.name.localeCompare(b.name))
                }
            }
            if(action.payload === 'z_a'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort((a,b) => b.name.localeCompare(a.name))
                }
            }
            if(action.payload === 'asc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ id: previousID }, { id: currentID }) => previousID - currentID)
                }
            }
            if(action.payload === 'height_asc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ height: previousHeight }, { height: currentHeight }) => previousHeight - currentHeight)
                }
            }
            if(action.payload === 'height_desc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ height: previousHeight }, { height: currentHeight }) => currentHeight - previousHeight)
                }
            }
            if(action.payload === 'weignt_asc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ weight: previousWeight }, { weight: currentWeight }) => currentWeight - previousWeight)
                }
            }
            if(action.payload === 'weignt_desc'){
                return {
                    ...state,
                    allPokemons : state.allPokemons?.sort(({ weight: previousWeight }, { weight: currentWeight }) => previousWeight - currentWeight)
                }
            }
            break
      default:
        return state
    }
}
  
export default pokemonReducer