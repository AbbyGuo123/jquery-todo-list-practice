import { connect } from 'react-redux';
import AddItem from '../component/AddItem';

import Todo from '../model/Todo';
import todosAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addfromMap: (content, statusOfList) => {
    todosAPI.add(new Todo(content), statusOfList, dispatch);
  },
  showFilterListfromMap: statusOfList => {
    todosAPI.filerByStatus(statusOfList, dispatch);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
