import React, { Component } from 'react';
import ListByContained from './ListByContained';
import ListByFirst from './ListByFirst';
import LetterList from './LetterList';
import './App.css';

class App extends Component {

  render() {
    var alphabet = window.alphabet;

    return (

      <div className="App">
        <h1>Scrabble Two Letter Words Directory</h1>

        <span class="menuitem">By First Letter:</span><LetterList anchorPrefix="f"></LetterList>

        <br></br>

        <span class="menuitem">By Contained Letter:</span><LetterList anchorPrefix="c"></LetterList>



        <h2>By First Letter</h2>
        <ListByFirst></ListByFirst>

        <h2>By Contained Letter</h2>
        <ListByContained></ListByContained>

        
      </div>
      
    );
  }
}

export default App;
