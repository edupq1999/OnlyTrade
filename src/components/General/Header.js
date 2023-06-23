import React from 'react'
import logo from '../../images/Logo.png'
import './styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className="header_logoContainer cel">
            <img src={logo} alt="Logo de OnlyTrade" class="logo_header"/>
            <div className="header_optionsContainer">
                <div className="header_searchBar">
                    <svg xmlns="http://www.w3.org/2000/svg" className='searchBar_Icon' viewBox="0 0 24 24">
                        <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                    </svg>
                    <input type="text" className="searchBar_Input" placeholder="¿Qué estás buscando?"/>
                    <button className="searchBar_Button">Buscar</button>
                </div>
                <div className="header_options">
                    <svg xmlns="http://www.w3.org/2000/svg" className='header_option Liked' viewBox="0 0 24 24">
                        <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='header_option Message' viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"></path>
                        <circle cx="15" cy="10" r="2"></circle>
                        <circle cx="9" cy="10" r="2"></circle>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className='header_option User' viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header