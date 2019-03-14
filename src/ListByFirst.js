import React, { Component } from 'react';
import { loadDict } from './Util'

class ListByFirst extends Component {
  render() {
    var dict = loadDict();
    
    dict.sort((a, b) => (a.word > b.word) ? 1 : -1);
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
                    return <li key="{name.word}" id={anch}><em class="word">{name.word} {name.scoreF}</em> <em class="meaning">{name.meaning}</em></li>;
                  })}
           </ul>      
 
    );
  }
}

export default ListByFirst;
