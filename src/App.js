import React from 'react';

import logo from './logo.svg';
import './App.css';
import Form from './Form';
//import Input from './Input';



class App extends React.Component {
  state = {
    value: '',
    items: [],
  };
  
  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  render() {
    const { item, list } = this.state
    
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Shopping List</h2>

        <Form 
	      value1={item} 
	      item1={list} 
	      submit={this.additem}
	    />
		//<Input/>
	    //</Form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>

        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>

      </div>
    );
  }
}

export default App;
