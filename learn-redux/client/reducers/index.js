import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import post from './post';
import comments from "./comments";

const rootReducer = combineReducers({
    post, 
    comments,
    routing: routerReducer
})

export default rootReducer