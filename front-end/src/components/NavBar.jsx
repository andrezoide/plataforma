import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logoEntaoFaz.png"
import '../styles/NavBar.css';

function Navbar() {
  return (
    <span className="navbar">
      <Link to="/"><img src={logo} alt="EntaoFaz!" className="logo" /></Link>
      <nav className="material-symbols-outlined">
        <Link>menu</Link> 
      </nav>
    </span>
  );
}

export default Navbar;