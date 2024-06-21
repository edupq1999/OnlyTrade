import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className="navList">
            <a className="navList_option" href="/"><li>Productos</li></a>
            <a className="navList_option" href="#/Acerca"><li>Acerca de</li></a>
            <a className="navList_option" href="#/Contacto"><li>Contáctanos</li></a>
        </ul>
    </nav>
  )
}

export default Navbar