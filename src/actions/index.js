export const addMap=(todos)=>({type:'add',todos})
export const showFilterListMap=(todos, statusOfList)=>({type:'showfilter',todos, statusOfList})
export const updateItemContentMap=(todos, statusOfList)=>({type:'updateItemContent',todos, statusOfList})
export const toggleActiveMap=(todos)=>({type:'toggleActive',todos})