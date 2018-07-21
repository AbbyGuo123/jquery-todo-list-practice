import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';
import classNames from 'classnames';
import todosAPI from '../api/TodoResourseAPI';

class filterStatus extends Component {
    constructor(props){
        super(props);
    }
    showFilterList(event) {
      const showFilterListfromMap = this.props.showFilterListfromMap;
      console.log(this.props.todos);
      const statusOfList = event.target.attributes.getNamedItem('data-filter')
        .value;
      const todos = this.deepCopy(todosAPI.filerByStatus(statusOfList));
      showFilterListfromMap(todos, statusOfList);
  
    }
    deepCopy(array) {
      return JSON.parse(JSON.stringify(array));
    }
    render(){
        return(
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
        )
    }
}
export default filterStatus;