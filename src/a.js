

import './App.css';
import React, { Component } from 'react';
import Newscomponent from './components/Newscomponent';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export class App extends Component {
  state={
    progress:100,
    theme:"light"
  }
  setProgress=(progress)=>{
    this.setState=({
      progress:progress
    })
   console.log(this.state.progress)
  }

  render() {
    return (
      <div>
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
            
            <Route exact path="/Technology" element={
              <Newscomponent category="Technology" setProgress={this.setProgress} />}
            />
            <Route exact path="/Business" element={
              <Newscomponent category="Business" setProgress={this.setProgress} />}
            />
            <Route exact path="/Health" element={
              <Newscomponent category="Health" setProgress={this.setProgress} />}
            />
            <Route exact path="/Entertainment" element={
              <Newscomponent category="Entertainment" setProgress={this.setProgress} />}
            />
            <Route exact path="/Science" element={
              <Newscomponent category="Science" setProgress={this.setProgress} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;


