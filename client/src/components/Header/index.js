import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
// import Login from "../Modal"

function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Nerds Next Door</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse navItems" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active item" aria-current="page" to="/dashboard">Home</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/login">Sign Up</a>
              <Link to="/signup">Sign Up</Link>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle item" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Cell Phone</Link></li>
                <li><Link className="dropdown-item" to="/">Tablet</Link></li>
                <li><Link className="dropdown-item" to="/">Zoom/Skype</Link></li>
                <li><Link className="dropdown-item" to="/">Wifi/Internet</Link></li>
                <li><Link className="dropdown-item" to="/">Computer</Link></li>
                <li><Link className="dropdown-item" to="/">Printer</Link></li>
                <li><Link className="dropdown-item" to="/">Other</Link></li>
              </ul>
            </li>

          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
        </div>
      </div>
    </nav>
  )
}

export default Header;
