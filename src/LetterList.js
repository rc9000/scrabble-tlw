import React, { Component } from 'react';


class LetterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorPrefix: props.anchorPrefix,
    };
    console.log("constructor", props)
  }

  render() {

    var alphabet = window.alphabet;
    var cssclass = this.state.anchorPrefix + "list" + " charlist";
    console.log("state", this.state);
    var state = this.state;
    return (
      <span class={cssclass}>

        {alphabet.map(function(name, index){
          var anch = "#" + state.anchorPrefix + "_" + name;
          return <span><a href={anch}>{name}</a>&nbsp;</span>
        })}
      </span>
 
    );
  }
}

export default LetterList;
