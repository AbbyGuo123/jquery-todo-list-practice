import Todo from '../model/Todo';
import todosAPI from '../api/TodoResourseAPI';

export default (state ={todos:[],statusOfList: Todo.ALL} , action) => {
    
    const statusFilter = state.statusOfList ===Todo.ALL?()=>true:todo =>{return state.todos.status ===state.statusOfList}
    
    switch (action.type){
        case 'add':{
            const newState = {todos:action.todos};
            return newState;
        }
        case 'showfilter':{
            const newState = {todos:action.todos,statusOfList:action.statusOfList};
            return newState;
        }
        case 'updateItemContent':{
            const newState = {todos:action.todos};
            return newState;
        }
        case 'toggleActive':{
            const newState = {todos:action.todos};
            return newState;
        }
        default:
            return state; 
    }
    
    

}