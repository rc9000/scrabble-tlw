import React, { Component } from 'react';
import ListByContained from './ListByContained';
import ListByFirst from './ListByFirst';
import './App.css';

class App extends Component {

  render() {
    var alphabet = window.alphabet;

    return (
      <div className="App">
        <h1>Scrabble Two Letter Words by Alphanumeric Order</h1>
        <span class="flist charlist">
        Jump to first letter:&nbsp;<br></br> 
        {alphabet.map(function(name, index){
          var anch = "#f_" + name;
          return <a href={anch}>{name} ({anch}) &nbsp;<br></br></a>
        })}
      </span>

        <h2>By First</h2>
        <ListByFirst></ListByFirst>

        <h2>By Contained</h2>
        <ListByContained></ListByContained>

        
      </div>
      
    );
  }
}

export default App;
