
import './App.css';

import React, { Component } from 'react'
import Newscomponent from './components/Newscomponent';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
//   state={
//     progress:100,
//     theme:"light"
//   }
//   setprogress=(progress)=>{
//     this.setState=({
//       progress:progress
//     })
//    console.log(this.state.progress)
//   }
  
    
  
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
        <Navbar />
        

        

    <div>
      <LoadingBar
        color='blue'
        progress={this.state.progress}
        height={4}
        ></LoadingBar>
      
    </div>
  

        <Newscomponent category="entertainment" setprogress={this.setprogress} />
        
      </div>
    )
  }
}

export default App

