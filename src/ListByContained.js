import React, { Component } from 'react';
import './App.css';

class ListByContained extends Component {
  render() {
    var dict = window.dict;
    var alphabet = window.alphabet;
    var cStruct = [];

    alphabet.forEach(e => {
      var re = new RegExp(e);
      cStruct[e] = dict.filter(x => x.word.match(re) );
    });

    //console.log(cStruct["A"]);

    return (
      <span>
      {alphabet.map(function(name, index){
          var anch = "c_" + name;
          return <span><h3 id={anch} key="lbc_{name}">{name}</h3>
          <ul>
            {cStruct[name].map(function(letter, index){
              return <li><em class="word">{letter.word}</em>  <em class="meaning">{letter.meaning}</em></li>
            })}
            </ul>
          </span>
        })}
      </span>      
    );
  }
}

export default ListByContained;
