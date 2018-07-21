import {connect} from 'react-redux'
import App from "../App";
import {showFilterListMap,addMap,updateItemContentMap,toggleActiveMap} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  todos:state.todos,
  statusOfList:state.statusOfList
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  // addfromMap:(todos) => dispatch(addMap (todos)),
  // showFilterListfromMap:(todos, statusOfList) => dispatch(showFilterListMap(todos, statusOfList)),
  // updateItemContentfromMap:(todos, statusOfList) => dispatch(updateItemContentMap(todos, statusOfList)),
  // toggleActivefromMap:(todos) => dispatch(toggleActiveMap(todos))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
