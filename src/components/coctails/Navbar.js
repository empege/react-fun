import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="coctails-nav">
      <div className="coctails-nav-center">
        <h1><Link to='/coctails/'>Coctails 🍸</Link></h1>
        <ul>
          <li>
            <Link to='/coctails/'>Home</Link>
          </li>
          <li>
            <Link to='/coctails/about'>About</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
