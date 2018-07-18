import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './todo.css'
import AddItem from './Component/AddItem';

class App extends Component {
  constructor(propos){
    super(propos);
    this.state={itemList:[]};
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input className="input-text" type="text" name="ListItem"/>
            <div id="button" onClick={this.AddItemFun.bind(this)}>Add</div>
        </div>
        <br/>
        <form id="todoForm">
          {this.state.itemList}
        </form>
        </div>
      </div>
    );
  }
  AddItemFun=(event)=>{
    this.state.itemList.push(<AddItem id={this.generateUUID} value={event.target.parentNode.children[0].value} class=""/>)
    console.log(event.target.parentNode.children[0].value);
    this.setState(this.state.itemList);
    event.target.parentNode.children[0].value = "";
  }

  generateUUID=()=>{
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}
}



export default App;
