import './App.css';
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/Home/Home";
import PokemonDetail from "./components/PokemonDetails/PokemonDetail";
import Footer from "./components/Footer/Footer";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PokemonProvider} from './context/PokemonContext';

function App() {
  return (
    <div className="container">
      <PokemonProvider>
        <Router>
          <Navbar/>
          <SearchBar/>
          <Routes>
              <Route exact path='/' element={<Home/>} />
          </Routes>
          <Routes>
              <Route exact path='/pokemon/:id' element={<PokemonDetail/>} />
          </Routes>
          <Footer/>
        </Router>
      </PokemonProvider>
    </div>
  );
}

export default App;
