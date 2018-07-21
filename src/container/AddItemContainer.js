import {connect} from 'react-redux'
import AddItem from "../component/AddItem";
import {showFilterListmap,addMap} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  todos:state.todos,
  statusOfList:state.statusOfList
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  addfromMap:(todos) => dispatch(addMap (todos)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
