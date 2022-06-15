import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import messageReducer from "./message";

const reducers = combineReducers( { messageReducer } )

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store;