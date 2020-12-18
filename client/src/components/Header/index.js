import React from "react";
import { Link } from "react-router-dom";
import Login from "../Modal"

function Header() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Nerds Next Door</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/login">Sign Up</a> */}
              {/* <Link to="/signup">Sign Up</Link> */}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Services
                      </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Cell Phone</a></li>
                <li><a className="dropdown-item" href="#">Tablet</a></li>
                <li><a className="dropdown-item" href="#">Zoom/Skype</a></li>
                <li><a className="dropdown-item" href="#">Wifi/Internet</a></li>
                <li><a className="dropdown-item" href="#">Computer</a></li>
                <li><a className="dropdown-item" href="#">Printer</a></li>
                <li><a className="dropdown-item" href="#">Other</a></li>
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
