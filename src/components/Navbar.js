import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

 
 
  
  render() {
   

    return (
      <div>
       {/* {${theme === 'light' ? 'bg-light' : 'bg-dark'} */}
        
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand navi" href="/">News<span className="plus" >+</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"tof="/Business">Business</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Technology">Technology</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">entertainment</Link>
        </li>
        
        
        
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
