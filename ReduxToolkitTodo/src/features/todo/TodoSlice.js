import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id : 1, todo: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "ansh",
    initialState,
    reducers: { // the 'reducers' expects (key:function)...
        addTodo: (state,action)=>{ // here state & action are the given parameters, where state reperesents the initialState (which we provide) and action are the given parameters (like: id, name etc.)
            const newTodo= {
                id: nanoid(),
                todo: action.payload
            }

            state.todos.push(newTodo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos
            .filter(currTodo => currTodo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos
            .map((currTodo) => (currTodo.id === action.payload.id) ? {...currTodo , todo: action.payload.text} : currTodo)
        }
    }
});

// we need to export these individual functionalities to use (like in Components).
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

// we also need to export the reducers to tell the store, who will we fetching and providing data...
export default todoSlice.reducer;