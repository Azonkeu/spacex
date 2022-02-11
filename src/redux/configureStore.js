import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketReducer from './rocket/rocket';

const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
