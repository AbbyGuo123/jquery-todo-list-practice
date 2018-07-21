import Todo from '../model/Todo';

export default (state ={todos:[],statusOfList: Todo.ALL,status:'read'} , action) => {
    
    const statusFilter = state.statusOfList ===Todo.ALL?()=>true:todo =>{return state.todos.status ===state.statusOfList}
    
    switch (action.type){
        case 'add':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.todos=action.todos;
            return newState;
        }
        case 'showfilter':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.todos=action.todos;
            newState.statusOfList = action.statusOfList;
            return newState;
        }
        case 'updateItemContent':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.todos=action.todos;
            return newState;
        }
        case 'toggleActive':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.todos=action.todos;
            return newState;
        }
        case 'changeStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.status = action.status;
            return newState;
        }
        
        default:
            return state; 
    }
    
    

}