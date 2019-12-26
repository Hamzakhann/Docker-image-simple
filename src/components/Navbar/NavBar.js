import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css'
import logo from '../../assets/logo.png'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light custom-nav">
      <a class="navbar-brand" href="/">
        <img src={logo} width='90px' height='55px' />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto mr-4 custom-nav-links">
          <Link to="/#home">Home</Link>
          <Link to="#about">About Us</Link>
          <Link to="#team">Team</Link>
          <Link to="/driver/form">Become A Driver</Link>
          <Link to="#contact">Contact Us</Link>
          <Link to="/faq/#top">FAQ</Link>
          {/* <a class="nav-item nav-link" href="#">About Us</a> */}
          {/* <a class="nav-item nav-link" href="#">Terms &  FAQ</a> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar;