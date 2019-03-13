import React, { Component } from 'react';
import './App.css';

class ListByFirst extends Component {
  render() {
    var dict = window.dict;
    var anchorSet = {};

    return (
            <ul>
                {dict.map(function(name, index){
                    var anch = "";
                    var letter = name.word.charAt(0);

                    if (!anchorSet[letter]){
                      anch = "f_" + name.word.charAt(0);
                      anchorSet[letter] = 1;
                    }
                    return <li key="{name.word}" id={anch}>{name.word}</li>;
                  })}
           </ul>      
 
    );
  }
}

export default ListByFirst;
