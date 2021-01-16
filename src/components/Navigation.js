import React, { useState, useRef, useEffect } from 'react';
import { navData } from '../data';
import logo from '../logoY2.png';
import { FaReact } from 'react-icons/fa';
import '../App.css'

function Navigation() {

  const navLinksRef = useRef(null);
  const linksRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      navLinksRef.current.style.height = `${linksRef.current.getBoundingClientRect().height}px`
    } else {
      navLinksRef.current.style.height = `0px`
    }


  }, [menuOpen])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo-ham-wrapper">
          <a href="https://www.ivanmitov.com" className="nav-logo">
            <img src={logo} alt="logo" />
            <h1>
              <span className="ivan">Ivan</span>
              <span className="mitov">Mitov</span>
              {`.com=>`}
              <span className="react">ReactJS<FaReact /></span>
            </h1>
          </a>
          <div className="nav-ham" onClick={() => { setMenuOpen(!menuOpen) }}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>


        <div className="nav-links" ref={navLinksRef}>
          <ul ref={linksRef}>
            {
              navData.map(({ id, text, url }) => <li key={id}><a href={url}>{text}</a></li>)
            }
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navigation;
