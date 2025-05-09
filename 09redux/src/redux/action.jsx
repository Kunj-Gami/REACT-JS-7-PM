export const addTodo = (todo) => {
    return{
        type : "ADD_TODO",
        payload : todo
    }
};
export const deleteTodo = (index) => {
    return{
        type : "DELETE_TODO",
        payload : index
    }
};
export const clearTodo = (data) => {
    return{
        type : "CLEAR_TODO",
        payload : data
    }
};
