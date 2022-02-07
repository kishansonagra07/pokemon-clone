import {useContext, useState} from 'react';
import "./Filter.css";
import PokemonContext from "./../../context/PokemonContext";

const Filter = () => {
    const [sorting,setSorting] = useState("asc");
    const {dispatch} = useContext(PokemonContext);
    const surpriseMe = () => {
        let array = ["height_asc","height_desc","weignt_asc","weignt_desc"];
        const randomVal = Math.floor(Math.random() * array.length);
        dispatch({type:'SET_SORTING', payload: array[randomVal]});
    }
    const sortingBy = (e) => {
        setSorting(e.target.value);
        dispatch({type:'SET_SORTING', payload: `${e.target.value}`});
    }
    return  <div className="row p-5 filterBg">
                <div className="col-md-6 d-grid">
                    <button type="button" className='btn btn-primary randomButton' onClick={surpriseMe}><i className="fa fa-refresh" aria-hidden="true"></i> Surprise Me!</button>
                </div>
                <div className="col-md-6">
                    <div className="col-md-6 float-end">
                        <select className="form-select" aria-label="Default select example" value={sorting} onChange={sortingBy} >
                            <option disabled>Sort Result by...</option>
                            <option value="asc">Lowest Number (First)</option>
                            <option value="desc">Highest Number (First)</option>
                            <option value="a_z">A-Z</option>
                            <option value="z_a">Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
};

export default Filter;
