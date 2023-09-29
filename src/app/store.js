import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/CounterSlice'
import crudReducer from '../Features/Todo/TodoSlice' 
export  const store = configureStore({
    reducer:{
        counter : counterReducer , 
        crud :  crudReducer
    }
})