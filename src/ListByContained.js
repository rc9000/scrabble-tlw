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
          return <span><h3 key="lbc_{name}">{name}</h3>
          <ul>
            {cStruct[name].map(function(name, index){
              return <li>{name.word}</li>
            })}
            </ul>
          </span>
        })}
      </span>      
    );
  }
}

export default ListByContained;
