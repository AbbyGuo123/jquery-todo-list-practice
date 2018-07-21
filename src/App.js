import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Todo from './model/Todo';
import TodoItem from './component/TodoItem';
import classNames from 'classnames';
import todosAPI from './api/TodoResourseAPI';
import AddItemContainer from './container/AddItemContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;

    // this.state = {
    //   todos: [],
    //   statusOfList: Todo.ALL
    // };
  }

  componentDidMount() {
    this.setState({
      todos: this.deepCopy(this.todosAPI.filerByStatus(Todo.ALL))
    });
  }

  add(event) {
    // if (event.keyCode === 13) {
      const addfromMap = this.props.addfromMap;
      this.todosAPI.add(new Todo(this.refs.newItem.value));
      const todos = this.deepCopy(
        this.todosAPI.filerByStatus(Todo.ALL)
      );
      addfromMap(todos);
      this.refs.newItem.value = '';
      console.log(this.props.todos);
    // }
  }

  toggleActive(viewId) {
    this.todosAPI.toggleActive(viewId);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.state.statusOfList)
    );
    this.setState({ todos });
  }

  showFilterList(event) {
    // console.log(this.props.todos);
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    const todos = this.deepCopy(this.todosAPI.filerByStatus(statusOfList));

    this.props.showFilterListfromMap(todos, statusOfList)
    // this.setState({ todos, statusOfList });

  }

  updateItemContent(viewId, content) {
    this.todosAPI.updateItemContent(viewId, content);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.props.statusOfList)
    );
    this.setState({ todos, statusOfList: this.props.statusOfList });
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {
    // console.log("111111111");
    // console.log(this.props.todos);
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        {/* <div>
          <input
            className="input-text"
            // onKeyUp={e => this.add(e)}
            id="todo-creator"
            ref="newItem"
          />
          <div className="button" onClick={e => this.add()}>
            Add
          </div>
        </div> */}
        <AddItemContainer />
        <div>
          <ol>
            {(() => {
              return this.props.todos.map(item => (
                <TodoItem
                  item={item}
                  key={item.viewId}
                  toggleActiveHandler={viewId => this.toggleActive(viewId)}
                  updateItemContent={(viewId, content) =>
                    this.updateItemContent(viewId, content)
                  }
                />
              ));
            })()}
          </ol>
        </div>
        <div>
          <ul className="filters">
            <li>
              <a
                href="#all"
                onClick={e => this.showFilterList(e)}
                data-filter="all"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ALL
                })}
              >
                ALL
              </a>
            </li>
            <li>
              <a
                href="#active"
                onClick={e => this.showFilterList(e)}
                data-filter="active"
                className={classNames({
                  selected: this.props.statusOfList === Todo.ACTIVE
                })}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#completed"
                onClick={e => this.showFilterList(e)}
                data-filter="completed"
                className={classNames({
                  selected: this.props.statusOfList === Todo.COMPLETED
                })}
              >
                Complete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


 export default App;
