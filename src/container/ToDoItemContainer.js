import {connect} from 'react-redux'
import ToDoItem from "../component/TodoItem";
import {changeStatusMap} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  status: 'read'
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  changeStatusfromMap:(status) => dispatch(changeStatusMap(status)),

})
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem)
