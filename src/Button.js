import React, { Component } from 'react'


class Button extends from Component {
  constructor(props){
    super(props)
    //this.state = {
      //value: '',
      //items: []
    //}
  }
  
  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };
  
  render(){
    return(
      <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
        Delete Last Item
      </button>
    )
  }
}

export default Button