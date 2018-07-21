import {connect} from 'react-redux'
import ShowItemList from "../component/ShowItemList";
import {updateItemContentMap,toggleActiveMap} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  todos:state.todos,
  statusOfList:state.statusOfList
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  updateItemContentfromMap:(todos) => dispatch(updateItemContentMap(todos)),
  toggleActivefromMap:(todos) => dispatch(toggleActiveMap(todos))
})
export default connect(mapStateToProps, mapDispatchToProps)(ShowItemList)