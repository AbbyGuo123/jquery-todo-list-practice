import Todo from '../model/Todo';
import todosAPI from '../api/TodoResourseAPI';

export default (state ={todos:[],statusOfList: Todo.ALL} , action) => {
    
    const statusFilter = state.statusOfList ===Todo.ALL?()=>true:todo =>{return state.todos.status ===state.statusOfList}
    
    switch (action.type){
        case 'showFilterList':{
            const newState = {todos:action.todos,statusOfList:action.statusOfList};
            return newState;
        }
        case 'add':{
            const newState = {todos:action.todos};
            return newState;
        }
    //     case 'DECREMENT':{
    //         const newState = [...state];
    //         newState[action.index]--;
    //         return newState;
    //     }
    //     case 'XCREMENT':{
    //         const newState = [...state];
    //         newState[action.index] = newState[action.index]*action.multipler;
    //         return newState;
    //     }
        default:
            return state; 
    }
    
    

}