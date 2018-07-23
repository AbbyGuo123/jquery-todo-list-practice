import React, { Component } from 'react';

import '../App.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }
  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  add(event) {
    // if (event.keyCode === 13) {
    const addfromMap = this.props.addfromMap;
    addfromMap(this.refs.newItem.value);
    this.refs.newItem.value = '';
    console.log(this.props.todos);
    // }
  }
  render() {
    return (
      <div>
        <input
          className="input-text"
          // onKeyUp={e => this.add(e)}
          id="todo-creator"
          ref="newItem"
        />
        <div className="button" onClick={e => this.add()}>
          Add
        </div>
      </div>
    );
  }
}

export default AddItem;
