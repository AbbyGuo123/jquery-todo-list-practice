import {connect} from 'react-redux'
import filterStatus from "../component/filterStatus";
import {showFilterListMap} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  todos:state.todos,
  statusOfList:state.statusOfList
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  showFilterListfromMap:(todos, statusOfList) => dispatch(showFilterListMap(todos, statusOfList))
})
export default connect(mapStateToProps, mapDispatchToProps)(filterStatus)