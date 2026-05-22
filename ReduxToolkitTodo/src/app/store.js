import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from '../features/todo/TodoSlice' // The import name can be ANYTHING because it is a default export. 

export const store = configureStore({
    reducer: todoSliceReducer // we can also give multiple reducers...
});