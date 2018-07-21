import React, { Component } from 'react';
import './App.css';
import Todo from './model/Todo';
import todosAPI from './api/TodoResourseAPI';
import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterStatusContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';

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

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <AddItemContainer />
        <ShowItemListContainer />
        <FilterStatusContainer/>
        
      </div>
    );
  }
}


 export default App;
