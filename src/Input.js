import React, { Component } from 'react'



class Input extends Component{
  state = {
    value: ''
  }
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
  render(){
    return(
      <input
        value={this.state.value1}
        onChange={this.props.onchange}
      />
    )
  }

}



export default Input