import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to={'/'}>
        home
      </Link>
      <Link to={'/signup'}>
        Sign Up
      </Link>
      <Link to={'/login'}>
        LOGIN
      </Link>
    </div>
  )
}

export default Navbar
