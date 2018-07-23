import Todo from '../model/Todo';
import { addMap, showFilterListMap } from '../actions/index';
import axios from 'axios';

const todosAPI = {
  todos: [],
  add(item, dispatch) {
    axios
      .post('http://localhost:8080/api/todos', {
        content: item.content,
        status: item.status
      })
      .then(res => {
        axios
          .get('http://localhost:8080/api/todos/search/statusOfTodos', {
            params: {
              status: 'completed,active'
            }
          })
          .then(res => {
            const todos = res.data._embedded.todos;
            dispatch(showFilterListMap(todos, Todo.ALL));
            dispatch(addMap(todos));
            return todos;
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  filerByStatus(status, dispatch) {
    if (status === Todo.ALL) {
      status = 'completed,active';
    }
    axios
      .get('http://localhost:8080/api/todos/search/statusOfTodos', {
        params: {
          status: status
        }
      })
      .then(res => {
        const todos = res.data._embedded.todos;
        console.log(todos);
        dispatch(showFilterListMap(todos, status));
        return todos;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  toggleActive(viewId, status, dispatch) {
    if (status == 'complete') status = 'active';
    else status = 'complete';
    axios
      .patch('http://localhost:8080/api/todos/' + viewId, {
        status: status
      })
      .then(res => {
        axios
          .get('http://localhost:8080/api/todos/search/statusOfTodos', {
            params: {
              status: 'completed,active'
            }
          })
          .then(res => {
            const todos = res.data._embedded.todos;
            console.log(todos);
            dispatch(showFilterListMap(todos, Todo.ALL));
            return todos;
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;
