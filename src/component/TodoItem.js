import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  changeToEditable() {
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap('write');
  }

  updateItem(e, viewId, content) {
    if (e.keyCode === 13) {
      const changeStatusfromMap = this.props.changeStatusfromMap;
      this.props.updateItemContent(viewId, content);
      // console.log(this.props.item);
      changeStatusfromMap('read');
    }
  }

  toggleActive(viewId, status) {
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap(viewId, status);
  }

  render() {
    const item = this.props.item;
    return (
      <li className={item.status}>
        {
          <input
            type="checkbox"
            className="done-todo"
            defaultChecked={item.status === Todo.COMPLETED}
            onClick={e => this.toggleActive(item.id, item.status)}
          />
        }
        <span onDoubleClick={e => this.changeToEditable(e)}>
          {this.props.status === 'read' ? (
            item.content
          ) : (
            <input
              autoFocus
              className="edit-input"
              defaultValue={item.content}
              onKeyUp={e =>
                this.updateItem(e, item.viewId, e.currentTarget.value)
              }
            />
          )}
        </span>
      </li>
    );
  }
}

export default TodoItem;
