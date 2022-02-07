import "./Pokemon.css";
import {NavLink} from 'react-router-dom';
import Badge from "../Badge/Badge";

const Pokemon = ({loading, allPokemons}) => {
    if(loading){
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )   
    }
  return <>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {allPokemons && allPokemons?.map((pokemon,index) => (
                    <NavLink style={{ textDecoration: 'none' }} to={`/pokemon/${pokemon.id}`} key={`${pokemon.id}-${pokemon.name}-${index}`}><div className="col">
                        <div className="card">
                            <img src={pokemon?.image} className="card-img-top pokemonImage img-thumbnail img-fluid" alt={pokemon?.name}/>
                            <div className="card-body">
                                <p className='pokemonId'>#{(pokemon.id).toString() <= "99" ? (pokemon.id).toString().padStart(3,'0') : (pokemon.id).toString()}</p>
                                <h5 className="card-title pokemonTitle">{pokemon.name}</h5>
                                <div className="row row-cols-2">
                                    {pokemon?.types && pokemon?.types?.map(({type}) => (
                                        <Badge key={type.name} name={type.name} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div></NavLink>
                ))}
            </div>
        </>;
};

export default Pokemon;
