import React, { Component } from 'react';
import './App.css';
import Todo from './model/Todo';
import todosAPI from './api/TodoResourseAPI';
import AddItemContainer from './container/AddItemContainer';
import FilterStatusContainer from './container/FilterStatusContainer';
import ShowItemListContainer from './container/ShowItemListContainer';
import Header from './component/Header';
import axios from 'axios';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;
  }

  componentDidMount() {
    const showFilterListfromMap = this.props.showFilterListfromMap;
    axios
      .get('http://localhost:8080/api/todos', {
        params: {
          id: 1,
          content: 'Remove unused imports',
          status: 'active'
        }
      })
      .then(res => {
        const todos = res.data._embedded.todos;
        console.log(todos);

        showFilterListfromMap(todos, Todo.ALL);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddItemContainer />
        <ShowItemListContainer />
        <FilterStatusContainer />
      </div>
    );
  }
}

export default App;
