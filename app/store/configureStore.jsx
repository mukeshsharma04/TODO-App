import { createStore, redux, compose, combineReducers, applyMiddleware  } from 'redux';
import {searchTextReducer,toggleShowCompletedReducer,todosReducer} from './../reducers/reducers';

export const configure = (initalState = {}) => {
 const reducer = combineReducers({
  searchText : searchTextReducer,
  showCompleted : toggleShowCompletedReducer,
  todos : todosReducer
 });

 const store = createStore(reducer, initalState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
 ));

 return store;
};
