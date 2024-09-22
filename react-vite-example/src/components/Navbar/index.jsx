import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const Navbar = () => {

    return (
    <header className='header'>
    <nav className='navbar container'>
        <figure className='navbar__logo'>
        <h1>Mundo GAMER</h1>
        <img src="" alt="" />
        </figure>
        <menu className='navbar__menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'store'}>Store</Link>
        <Link to={'contactos'}>Contactos</Link>
        <li>
            <a href="" className="navbar__link"><CartWidget quantity={0}/></a></li>
        </menu>
    </nav>
    </header>
    )
}

export default Navbar