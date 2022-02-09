import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import todo from './modules/todo';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
// apply logger to redux

const reducer = combineReducers({
  todo,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer,
  initialState);
export default configureStore;
