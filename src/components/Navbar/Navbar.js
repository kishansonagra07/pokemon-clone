import "./Navbar.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <ul className="nav justify-content-center">
                <li className="nav-item firstNavLink">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item secondNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">Pokedox</NavLink>
                </li>
                <li className="nav-item thirdNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">Video Games & Apps</NavLink>
                </li>
                <li className="nav-item forthNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">Trading Card Game</NavLink>
                </li>
                <li className="nav-item fifthNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">Pokemon TV</NavLink>
                </li>
                <li className="nav-item sixNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">Play! Pokemon Events</NavLink>
                </li>
                <li className="nav-item sevenNavLink">
                    <NavLink className="nav-link" aria-current="page" to="/">News</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Navbar
