import {setSearchText, addToDo, toggleShowCompleted, toggleToDo, addToDos} from './../../actions/actions';
import expect from 'expect';


describe('Actions', () => {
 it('should generate SearchText action', () => {
  const action = {
   type : 'SET_SEARCH_TEXT',
   searchText : 'Sme Text'
  };

  const res = setSearchText(action.searchText);
  expect(res).toEqual(action);
 });

 it('should generate add to do action', () => {
  const action = {
   type : 'ADD_TODO',
   text : "Hey i am Add to Do action"
  };

  const res = addToDo(action.text);
  expect(res).toEqual(action);
 });

 it('should generate add todos action', () => {
  let todos = [{
   id : 1,
   text : "im text",
   completed : false,
   createdAt : 500,
   completedAt : undefined
  }];

  const action = {
   type : 'ADD_TODOS',
   todos
  };

  const res = addToDos(todos);
  expect(res).toEqual(action);
 });

 it('should generate toggle showcompleted action', () => {
  const action = {
   type : 'TOGGLE_SHOW_COMPLETED',
  };

  const res = toggleShowCompleted();
  expect(res).toEqual(action);
 });

 it('should generate toggle todo action', () => {
  const action = {
   type : 'TOGGLE_TODO',
   id : 1
  };

  const res = toggleToDo(action.id);
  expect(res).toEqual(action);
 });
});
