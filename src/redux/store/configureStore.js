import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import adminReducers from "../reducers/admin/adminReducers"
import studentReducer from '../reducers/students/studentReducer'
import courseReducer from '../reducers/course/courseReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
         adminStore:adminReducers, //admin
         studentStore:studentReducer,   //student 
         courseStore:courseReducer
    }),applyMiddleware(thunk))
    return store

}
export default configureStore
