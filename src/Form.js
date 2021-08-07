import React, { Component } from 'react'


class Form extends from Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      items: []
    }
  }
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };
  
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  


  render(){
    return(
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

export default Form