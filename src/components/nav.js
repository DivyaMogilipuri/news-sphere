import React, { Component } from 'react'

export class Navbar extends Component {
  state={
    theme:"light"
  }
  changeTheme=()=>{
this.setState((prevState)=>({
  theme:prevState.theme==="dark"?"light":"dark"
}))
  }
  
 
 
  
  render() {
    const { theme } = this.state;

    return (
      <div>
       {/* {${theme === 'light' ? 'bg-light' : 'bg-dark'} */}
        
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
  <div className="container-fluid">
    <a className="navbar-brand navi" href="/">News<span className="plus" >+</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Business</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">Health</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Science</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{theme}and</a>
        </li>
        <li className="nav-item">
        <button className="nav-link float-right icon" onClick={this.changeTheme}>
        <ion-icon name={`${theme==="light"?"moon-outline":"sunny-outline"}`}></ion-icon>
        </button>
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
