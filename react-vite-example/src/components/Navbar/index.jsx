import CartWidget from './CartWidget/index';

const Navbar = () => {

    return (
    <header className='header'>
    <nav className='navbar container'>
        <figure className='navbar__logo'>
        <img src="" alt="" />
        </figure>
        <menu className='navbar__menu'>
        <li className='navbar__item'>
            <a href="" className="navbar__link">Inicio</a></li>
        <li className='navbar__item'>
            <a href="" className="navbar__link">Contactos</a></li>
        <li className='navbar__item'>
            <a href="" className="navbar__link">Login</a></li>
        <li >
            <a href="" className="navbar__links"><CartWidget /></a></li>
        </menu>
    </nav>
    </header>
    )
}

export default Navbar