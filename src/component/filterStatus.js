import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';
import classNames from 'classnames';
import { Button } from 'antd';

class filterStatus extends Component {
  constructor(props) {
    super(props);
  }
  showFilterList(event) {
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    const showFilterListfromMap = this.props.showFilterListfromMap;
    showFilterListfromMap(statusOfList);
  }
  deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  render() {
    return (
      <div>
        <ul className="filters">
          <li>
            <Button data-filter="all" onClick={e => this.showFilterList(e)}>
              ALL
            </Button>
          </li>
          <li>
            <Button data-filter="active" onClick={e => this.showFilterList(e)}>
              Active
            </Button>
          </li>
          <li>
            <Button
              data-filter="completed"
              onClick={e => this.showFilterList(e)}
            >
              Complete
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
export default filterStatus;
