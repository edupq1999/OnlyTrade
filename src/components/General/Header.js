import React, { useState } from 'react'
import logo from '../../images/Logo.png'
import './styles/Header.css'
import Carrito from '../../pages/Carrito';

const Header = () => {
    const [carritoVisible, setCarritoVisible] = useState(false);

    const toggleCarrito = () => {
        setCarritoVisible(!carritoVisible);
    };
    return (
        <header>
            <div className="header_logoContainer cel">
                <img src={logo} alt="Logo de OnlyTrade" className="logo_header" />
                <div className="header_optionsContainer">
                    <div className="header_searchBar">
                        <svg xmlns="http://www.w3.org/2000/svg" className='searchBar_Icon' viewBox="0 0 24 24">
                            <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                        </svg>
                        <input type="text" className="searchBar_Input" placeholder="¿Qué estás buscando?" />
                        <button className="searchBar_Button">Buscar</button>
                    </div>
                    <div className="header_options" onClick={toggleCarrito}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='header_option Liked' viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
                    </div>
                </div>
            </div>
            <Carrito isVisible={carritoVisible} onClose={toggleCarrito} />
        </header>
    )
}

export default Header