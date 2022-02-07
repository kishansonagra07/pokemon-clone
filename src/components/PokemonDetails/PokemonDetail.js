import {useContext, useEffect} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';
import Badge from '../Badge/Badge';
import PokemonContext from "./../../context/PokemonContext";

const PokemonDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const {allPokemons} = useContext(PokemonContext);
  const [pokemonInfo] = allPokemons.filter((pokemon) => pokemon.id === parseInt(id) || pokemon.name === id);

  const previousClick = () => {
      if(pokemonInfo?.id > 1){
        navigate(`/pokemon/${pokemonInfo?.id - 1}`);
      }
  }

  const nextClick = () => {
      if(pokemonInfo?.id < allPokemons.length){
        navigate(`/pokemon/${pokemonInfo?.id + 1}`);
      }
  }

  useEffect(() => {
    if(pokemonInfo){
      document.title = `${pokemonInfo?.name} | Pokemon.com`;
    }
    window.scrollTo(0, 0);
  },[pokemonInfo])

  if(!pokemonInfo) return (
    <div className="container">
      <div className="row">
          <div className="alert alert-warning text-center" style={{margin:"64px auto",width:"500px"}} role="alert">
            Oops! No pokemon found ! okayy take me to <Link to="/" className="alert-link">home</Link> page then.
          </div>
      </div>
    </div>
  )
  return <>
            <div className="row">
              <div className="col-md-4">
                <button className='btn btn-info float-start' onClick={previousClick} disabled={!pokemonInfo?.id > 1}><i class="fa fa-angle-left" aria-hidden="true"></i> PREVIOUS</button>
              </div>
              <div className="col-md-4">
                  <h2 className='text-center pokemonName'>{pokemonInfo?.name} <span>#{(pokemonInfo?.id).toString() <= "99" ? (pokemonInfo?.id).toString().padStart(3,'0') : (pokemonInfo?.id).toString()}</span></h2>
              </div>
              <div className="col-md-4">
              <button className='btn btn-info float-end' onClick={nextClick} disabled={pokemonInfo?.id >= allPokemons.length}>NEXT <i class="fa fa-angle-right" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="text-center">
                <img src={pokemonInfo?.image} className="img-fluid" alt={pokemonInfo?.name}/>
                </div>
                  <div className="mt-5">
                    <table className="table">
                      <thead>
                        <tr>
                          {pokemonInfo?.stats && pokemonInfo?.stats.map((stat) => (
                            <th scope="col" key={stat.stat.name}>{stat.stat.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          {pokemonInfo?.stats && pokemonInfo?.stats.map((stat,index) => (
                            <td key={`${stat.base_stat}_${index}`}>{stat.base_stat}</td>
                          ))}
                      </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
              <div className="col-md-6 float-end">
              <div className="card">
                <div className="card-header">
                  About
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                  </blockquote>
                </div>
              </div>
                <div className='m-5'>
                  <div className="well">
                    <div className="row row-cols-2">
                      <div>
                          <h4>Height</h4>
                          <span className="badge bg-primary">{pokemonInfo?.height}</span>
                          <h4>Weight</h4>
                          <span className="badge bg-primary">{pokemonInfo?.weight}</span>
                      </div>
                      <div>
                          <h4>Abilities</h4>
                          {pokemonInfo?.abilities && pokemonInfo?.abilities?.map(({ability}) => (
                            <span className="badge bg-info" key={ability?.name}>{ability?.name}</span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-5">
                <h4>Type</h4>
                  <div className="row row-cols-2">
                    {pokemonInfo?.types && pokemonInfo?.types?.map(({type}) => (
                        <Badge key={type.name} name={type.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </>;
};

export default PokemonDetail;
