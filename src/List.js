import React, { Component } from 'react'


class List extends from Component {
  constructor(props){
    super(props)
    //this.state = {
      //value: '',
      //items: []
    //}
  }
  
  render(){
    return(
      <ol className="item-list">
        {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    )
  }
}

export default List