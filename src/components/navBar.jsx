import React from 'react';
import './navBar.css';
import logo from './MH.png';
function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
  <div className="container-fluid">
  <a class="navbar-brand ms-1" href="#">
      <img src={logo} alt="Bootstrap" width="30" height="24"/>
    </a>
    <a className="navbar-brand" href="#">Mind Help</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mental Heath AI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Consultation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Exercises</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Meditaion</a>
        </li>
      </ul>
      <form class="d-flex ms-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button type="button"class="btn btn-secondary ms-5">Sign Up/Login</button>
    </div>
  </div>
</nav>
    );
}

export default NavBar;