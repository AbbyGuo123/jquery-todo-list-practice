import React, { Component } from 'react';
import './App.css';
import Todo from './model/Todo';
import todosAPI from './api/TodoResourseAPI';
import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterStatusContainer'
import ShowItemListContainer from './container/ShowItemListContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;
  }

  componentDidMount() {
    this.setState({
      todos: this.deepCopy(this.todosAPI.filerByStatus(Todo.ALL))
    });
  }


  toggleActive(viewId) {
    this.todosAPI.toggleActive(viewId);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.props.statusOfList)
    );
    const toggleActivefromMap = this.props.toggleActivefromMap;
    toggleActivefromMap( todos );
  }


  updateItemContent(viewId, content) {
    this.todosAPI.updateItemContent(viewId, content);
    const todos = this.deepCopy(
      this.todosAPI.filerByStatus(this.props.statusOfList)
    );
    const updateItemContentfromMap = this.props.updateItemContentfromMap;
    updateItemContentfromMap( todos, this.props.statusOfList);
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <AddItemContainer />
        <ShowItemListContainer />
        <FilterStatusContainer/>
        
      </div>
    );
  }
}


 export default App;
