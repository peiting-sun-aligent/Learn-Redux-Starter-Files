import { createStore, compose } from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts'

//create an object for the default data
const defaultState = {
    post:posts,
    comments
};

const enhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,defaultState, enhancers())


export const history = syncHistoryWithStore(browserHistory,store)

if (module.hot){
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)

    })
}
export default store