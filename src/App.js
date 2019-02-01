import React, { Component } from 'react';
import './App.css';
import userData from './userData'

class App extends Component {
  
  render() {
    const users = userData.userData.map( (element,index) => {
      return(
        <div className='card' key={`${element.name}-${element.email}-${element.age}`}>
          <h2>{element.name}</h2>
          <h2>{element.age}</h2>
          <h2>{element.email}</h2>
        </div>
      )
    });
    return (
      <div className="App">
          {users}
      </div>
    );
  }
}

export default App;
