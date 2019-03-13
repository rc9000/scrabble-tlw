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
          return <h3 key="lbc_{name}">{name}
          <ul>
            {cStruct[name].map(function(name, index){
              return <h4>{name.word}</h4>
            })}
            </ul>
          </h3>
        })}
      </span>      
    );
  }
}

export default ListByContained;
