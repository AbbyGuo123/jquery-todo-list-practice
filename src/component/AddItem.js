import React, { Component } from 'react';
import Todo from '../model/Todo';
import todosAPI from '../api/TodoResourseAPI';
import '../App.css';

class AddItem extends Component {
    constructor(props){
        super(props);
    }
    deepCopy(array) {
        return JSON.parse(JSON.stringify(array));
      }
    add(event) {
        // if (event.keyCode === 13) {
          const addfromMap = this.props.addfromMap;
          todosAPI.add(new Todo(this.refs.newItem.value));
          const todos = this.deepCopy(
            todosAPI.filerByStatus(this.props.statusOfList)
          );
          addfromMap(todos);
          this.refs.newItem.value = '';
          console.log(this.props.todos);
        // }
      }
    render(){
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
        )
    }
}


export default AddItem;