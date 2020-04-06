import React, { Component } from 'react';
// import data from '../src/Components/Job/data.json'
import Job from './Components/Job/Job';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log(this.state)
  }

  // JobsToShow {

  // }

  render() {

    return (
      <div className="App">
          <div className="container">
          <Job />
          </div>
  
      </div>
    );
  }
}

export default App;
