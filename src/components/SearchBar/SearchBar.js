import {useState} from 'react';
import './SearchBar.css';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return <div className="containerBox">
            <div className="row p-5">
                <div className="col-md-7">
                  <form onSubmit={(e) => { e.preventDefault(); navigate(`/pokemon/${searchText}`); setSearchText("");}}>
                    <div className="row">
                      <div className="col-md-8">
                            <div className="mb-3">
                              <label htmlFor="searchTextboxLabel" className="form-label text-white searchLabel">Name or Number</label>
                                <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} className="form-control searchTextBox" id="searchTextboxLabel"/>
                                <p className="text-white mt-1">Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</p>
                            </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <button type="submit" className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-5 text-left">
                    <div className="mt-4">
                      <h2 className='searchRightText p-4 text-white'>Search for a Pokémon by name or using its National Pokédex number.</h2>
                    </div>
                </div>
            </div>
  </div>;
};

export default SearchBar;
