import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand mx-5" to="/">
        Commercial App
      </Link>
   
        <ul className="navbar-nav mx-5">
        <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"></input>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
          <li className="nav-item">
            <Link className="nav-link"  to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>    
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/help">
              Help Center
            </Link>
          </li>      
        </ul>
    
    </div>
  </nav>
  )
}

export default Nav
