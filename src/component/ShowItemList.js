import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosAPI from '../api/TodoResourseAPI';
import '../App.css';
class ShowItemList extends Component{
    constructor(props){
        super(props);
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
      render(){
        return(
            <div><ol>
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
        )
    }

}
export default ShowItemList;
