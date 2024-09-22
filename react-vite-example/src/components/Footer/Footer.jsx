import { Link } from "react-router-dom"

const Footer = () => {
return (
    <footer>
        <div className= "contenedor" >
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/store">Store</Link>
                <Link href="/contactos">Contactos</Link>
            </nav>
            <p className="copyright">Copyright © 2024 – Mundo GAMER. Todos los derechos reservados.</p>
        </div>
    </footer>
)

}
export default Footer