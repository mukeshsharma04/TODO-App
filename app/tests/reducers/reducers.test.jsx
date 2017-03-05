import {searchTextReducer, toggleShowCompletedReducer} from './../../reducers/reducers';
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
});
