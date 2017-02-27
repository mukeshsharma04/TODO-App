import expect from 'expect';
import TodoAPI from './../../api/ToDoAPI';


describe('TodoAPI',() => {
 it('should exist', () => {
  expect(TodoAPI).toExist();
 });
});

describe('setTodoAPI',() => {
 beforeEach(() => {
  localStorage.removeItem('todos');
 });

 it('should set todos in local storage on call setTodos', () => {
  var todos = [{
   id : 119,
   text : "Im here to test local storage",
   completed : false
  }];
  TodoAPI.setTodos(todos);
  var actualTodos = JSON.parse(localStorage.getItem('todos'));

  expect(actualTodos).toEqual(todos);

 });

 it('should avoid bad arrays', () => {
  var badTodos = {a : 'b'};
  TodoAPI.setTodos(badTodos);
  expect(localStorage.getItem('todos')).toBe(null);
 });

});

describe('getTodoAPI',() => {


 it('should return empty array for bad localStorage data', () => {
  var actualTodos = TodoAPI.getTodos();

  expect(actualTodos).toEqual([]);
 });

 it('should return todos on valid local storage', () => {
  var todos = [{
   id : 119,
   text : "Im here to test local storage",
   completed : false
  }];
  localStorage.setItem('todos', JSON.stringify(todos));

  var actualTodos = TodoAPI.getTodos();

  expect(actualTodos).toEqual(todos);

 });


});
