import Navbar from './assets/components/Navbar';
import './App.css'

function App() {

  return (
   <header className='header'>
    <nav className='navbar'>
      <figure className='navbar__logo'>
        <img src="" alt="" />
      </figure>
      <menu className='navbar__menu'>
        <li className='navbar__link'>Inicio</li>
        <li className='navbar__link'>Contactos</li>
        <li className='navbar__link'>Login</li>
        <li className='navbar__link'>Carrito</li>
      </menu>
    </nav>
   </header>
  )
}

export default App
