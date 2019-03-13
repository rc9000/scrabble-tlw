import React, { Component } from 'react';
import ListByContained from './ListByContained';
import ListByFirst from './ListByFirst';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Scrabble Two Letter Words by Alphanumeric Order</h1>
        
        <h2>By First</h2>
        <ListByFirst></ListByFirst>

        <h2>By Contained</h2>
        <ListByContained></ListByContained>

        
      </div>
      
    );
  }
}

export default App;
