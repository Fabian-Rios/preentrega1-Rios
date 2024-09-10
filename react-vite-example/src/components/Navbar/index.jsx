import CartWidget from '../CartWidget';
import ItemList from '../ItemList';

const Navbar = () => {

    return (
    <header className='header'>
    <nav className='navbar container'>
        <figure className='navbar__logo'>
        <img src="" alt="" />
        </figure>
        <menu className='navbar__menu'>
            <ItemList label='Inicio' />
            <ItemList label='Contactos' />
            <ItemList label='Login' />
        <li >
            <a href="" className="navbar__links"><CartWidget quantity={0}/></a></li>
        </menu>
    </nav>
    </header>
    )
}

export default Navbar