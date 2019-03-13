import React, { Component } from 'react';
import './App.css';

class ListByFirst extends Component {
  render() {
    var dict = window.dict;
    return (
      <div className="App">
            <ul>
                {dict.map(function(name, index){
                    return <li key="{name.word}">{name.word}</li>;
                  })}
           </ul>      
      </div>
      
    );
  }
}

export default ListByFirst;
