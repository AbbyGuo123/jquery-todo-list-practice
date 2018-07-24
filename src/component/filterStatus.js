import React, { Component } from 'react';
import Todo from '../model/Todo';
import '../App.css';
import classNames from 'classnames';
import { Button } from 'antd';
import { Link, Route } from 'react-router-dom';
import ShowItemListContainer from '../container/ShowItemListContainer';

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
    let match = this.props.match;
    return (
      <div>
        <ul className="filters">
          <li>
            <Link
              to={`${match.url}?status=completed,active`}
              data-filter="all"
              onClick={e => this.showFilterList(e)}
            >
              ALL
            </Link>
          </li>
          <li>
            <Link
              to={`${match.url}?status=active`}
              data-filter="active"
              onClick={e => this.showFilterList(e)}
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              to={`${match.url}?status=completed`}
              data-filter="completed"
              onClick={e => this.showFilterList(e)}
            >
              Complete
            </Link>
          </li>
        </ul>
        <Route
          path={`${match.url}/:topicId`}
          component={ShowItemListContainer}
        />
      </div>
    );
  }
}
export default filterStatus;
