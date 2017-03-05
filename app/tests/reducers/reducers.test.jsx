import {searchTextReducer, toggleShowCompletedReducer, todosReducer} from './../../reducers/reducers';
import expect from 'expect';
import dF from 'deep-freeze-strict';

describe('Reducers', () => {
 describe('setSearchTextReducers', () => {
  it('should set Searchtext', () => {
   const action = {
    type : 'SET_SEARCH_TEXT',
    searchText : 'dog'
   };

   const res = searchTextReducer(dF(''),dF(action));
   expect(res).toEqual(action.searchText);
  });
 });

 describe('toggleShowCompletedReducer', () => {
  it('should toggle ShowCompleted', () => {
   const action = {
    type : 'TOGGLE_SHOW_COMPLETED',
   };

   const res = toggleShowCompletedReducer(dF(true),dF(action));
   expect(res).toEqual(false);
  });
 });

 describe('todosReducer', () => {
  it('should addToDo', () => {
   const action = {
    type : 'ADD_TODO',
    text : 'Hey i am first todo to test'
   };

   const res = todosReducer(dF([]),dF(action));

   expect(res.length).toEqual(1);
   expect(res[0].text).toEqual(action.text);
  });

  it('should toggleToDo', () => {
   let todos = [{
    id : 1,
    completed : true,
    createdAt : 1234,
    completedAt : 123456,
    text : 'Something'
   }];

   const action = {
    type : 'TOGGLE_TODO',
    id : 1
   };
   const res = todosReducer(dF(todos),dF(action));

   expect(res[0].completed).toEqual(false);
   expect(res[0].completedAt).toEqual(undefined);
  });
 });
});
