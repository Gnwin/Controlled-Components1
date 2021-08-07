import React, { Component } from 'react';

import Input from './Input';


class Form extends Component {

  //let { values, lists } = this.props;

  state = {
    //value: values,
    //items: lists,
    type: 'text',
    placeholder:''
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
    
    let { values, lists } = this.props;
    
    return(
      <form onSubmit={this.props.submit()}>
        <Input 
		  type={this.state.type} 
		  placeholder={this.state.placeholder} 
		  value={this.props.values}
		  onchange={this.handleChange}
	  	/>
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

export default Form