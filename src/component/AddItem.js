import React, { Component } from 'react';
import { Button } from 'antd';
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
    addfromMap(this.refs.newItem.value, this.props.statusOfList);
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
        <Button type="primary" onClick={e => this.add()}>
          Add
        </Button>
      </div>
    );
  }
}

export default AddItem;
