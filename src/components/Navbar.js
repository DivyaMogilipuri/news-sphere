import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

 
 
  
  render() {
   

    return (
      <div>
       {/* {${theme === 'light' ? 'bg-light' : 'bg-dark'} */}
        
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand navi" to="/">News<span className="plus" >Sphere</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

      
        <li className="nav-item">
          <Link className="nav-link"to="/Business">Business</Link>
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
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
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
