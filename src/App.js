
import './App.css';

import React, { Component } from 'react'
import Newscomponent from './components/Newscomponent';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export class App extends Component {
  state={
    progress:100,
    theme:"light"
  }
  setprogress=(progress)=>{
    this.setState=({
      progress:progress
    })
   console.log(this.state.progress)
  }
  
    
  
//   state={
//     theme:"light"
//   }
//   changeTheme=()=>{
// this.setState((prevState)=>({
//   theme:prevState.theme==="dark"?"light":"dark"
// }))
//   }

  
  render() {
  

    return (
      <div >
        <Router>
        <Navbar />
        

        

    <div>
      <LoadingBar
        color='red'
        progress={this.state.progress}
        height={4}
        ></LoadingBar>
      
    </div>
  
        
  
      <Routes>
        <Route exact path="/" element={
        <Newscomponent category="general" key="genral" setprogress={this.setprogress} />}>
        </Route>

        <Route exact path="/Technology" element={
        <Newscomponent category="Technology"key="technology" setprogress={this.setprogress} />}>
        </Route>

        <Route exact path="/Business" element={
        <Newscomponent category="Business" key="business" setprogress={this.setprogress} />}>
        </Route>

        <Route exact path="/Health" element={
        <Newscomponent category="Health" key="health" setprogress={this.setprogress} />}>
        </Route>

        <Route exact path="/Entertainment" element={
        <Newscomponent category="Entertainment" setprogress={this.setprogress} />}>
        </Route>

        <Route exact path="/Science" element={
        <Newscomponent category="Science" key="science" setprogress={this.setprogress} />}>
        </Route>

        
      </Routes>
      </Router>
      </div>
    )
  }
}

export default App
