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

describe('filterTodoAPI',() => {
 var todos = [
  {id : 1, text : "Testing API 1", completed : true},
  {id : 2, text : "Testing API 2", completed : false},
  {id : 3, text : "Testing API 3", completed : true},
 ];

 it('should return all items if showcompleted is true', () => {
  var filteredTodos = TodoAPI.filterTodos(todos, true, '');

  expect(filteredTodos.length).toBe(3);
 });

 it('should return not completed items if showcompleted is false', () => {
  var filteredTodos = TodoAPI.filterTodos(todos, false, '');

  expect(filteredTodos.length).toBe(1);
 });

 it('should sort by completed status', () => {
  var filteredTodos = TodoAPI.filterTodos(todos, true, '');

  expect(filteredTodos[0].completed).toBe(false);
 });

 it('should Search by Empty text', () => {
  var filteredTodos = TodoAPI.filterTodos(todos, true, '');

  expect(filteredTodos.length).toBe(3);
 });

 it('should Search by text', () => {
  var searchText = "Testing";
  var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);

  expect(filteredTodos.length).toBe(3);
 });
});
