import {useEffect, useContext, useState} from 'react';
import Filter from './../Filter/Filter';
import Pokemon from './../PokemonBoxs/Pokemon';
import "./Home.css";
import PokemonContext from "./../../context/PokemonContext";
import {getPokemons} from "./../../context/PokemonAction";

const Home = () => {
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const {allPokemons, url, loading, dispatch} = useContext(PokemonContext);

  const getAllPokemons = async() => {
    const allPokemons = await getPokemons(url);
    dispatch({type:'SET_POKEMON', payload: allPokemons});
    setLoadMoreLoading(false);
  };

  useEffect(() => {
    document.title = "Pokédex | Pokemon.com";
    if(allPokemons.length === 0){
      dispatch({type: 'SET_LOADING'});
      getAllPokemons();
    }
  },[allPokemons,dispatch]);

  const loadMorePokemon = () => {
    setLoadMoreLoading(true);
    if(url){
        getAllPokemons();
    }
  }
  
  return <div className='container bgImage'>
            <Filter/>
            {allPokemons && <Pokemon allPokemons={allPokemons} loading={loading} />}

            {url && !loading && (
                  <div className="text-center loadMoreDiv">
                    <button disabled={loadMoreLoading} type="button" onClick={loadMorePokemon} className="btn btn-dark position-relative"> { loadMoreLoading ? "Loading..." : "Load More"}  <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></button>
                  </div>
            )}
        </div>;
};

export default Home;
