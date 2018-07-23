import { connect } from 'react-redux';
import ToDoItem from '../component/TodoItem';
import { changeStatusMap } from '../actions/index';

import todosAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => ({
  status: 'read'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeStatusfromMap: (viewId, status) => {
    todosAPI.toggleActive(viewId, status, dispatch);
  } //dispatch(changeStatusMap(status)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItem);
