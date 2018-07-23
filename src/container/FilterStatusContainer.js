import { connect } from 'react-redux';
import filterStatus from '../component/filterStatus';
import todosAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showFilterListfromMap: statusOfList => {
    todosAPI.filerByStatus(statusOfList, dispatch);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filterStatus);