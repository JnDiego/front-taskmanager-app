import React from 'react'

const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">Hola <span>Juan Diego</span></p>

      <nav className="nav-principal">
        <a href="#!">Sign Out</a>
      </nav>
    </header>
  )
}

export default Header
