
const Footer = () => {
  return <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" onClick={ (e) => e.preventDefault() } className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" onClick={ (e) => e.preventDefault() } className="nav-link px-2 text-muted">Pokedox</a></li>
                <li className="nav-item"><a href="#" onClick={ (e) => e.preventDefault() } className="nav-link px-2 text-muted">Video Games & Apps</a></li>
                <li className="nav-item"><a href="#" onClick={ (e) => e.preventDefault() } className="nav-link px-2 text-muted">Trading Card Game</a></li>
                <li className="nav-item"><a href="#" onClick={ (e) => e.preventDefault() } className="nav-link px-2 text-muted">Pokemon TV</a></li>
            </ul>
            <p className="text-center text-muted">© {new Date().getFullYear()} Pokemon Clone, By Kishan</p>
          </footer>;
};

export default Footer;
