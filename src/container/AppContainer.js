import { connect } from 'react-redux';
import App from '../App';
import { showFilterListMap } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  statusOfList: state.statusOfList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showFilterListfromMap: (todos, statusOfList) =>
    dispatch(showFilterListMap(todos, statusOfList))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
