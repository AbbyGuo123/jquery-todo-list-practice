import React, { Component } from 'react';
import '../App.css';
import todosAPI from '../api/TodoResourseAPI';
import ToDoItemContainer from '../container/ToDoItemContainer';
class ShowItemList extends Component{
    constructor(props){
        super(props);
    }
    toggleActive(viewId) {
      todosAPI.toggleActive(viewId);
      const todos = this.deepCopy(
        todosAPI.filerByStatus(this.props.statusOfList)
      );
      const toggleActivefromMap = this.props.toggleActivefromMap;
      toggleActivefromMap( todos );
    }
  
  
    updateItemContent(viewId, content) {
      todosAPI.updateItemContent(viewId, content);
      const todos = this.deepCopy(
        todosAPI.filerByStatus(this.props.statusOfList)
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
                <ToDoItemContainer
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
