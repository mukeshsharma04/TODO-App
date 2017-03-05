import React from 'react';
import expect from 'expect';
import ConnectedToDoList,{ToDoList} from './../../components/ToDoList';
import ConnectedToDo,{ToDo} from './../../components/ToDo';
import $ from "jquery";
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configure} from './../../store/configureStore';

describe('ToDoList', () => {
 it('should exist', () => {
  expect(ToDoList).toExist();
 });

 it('should show empty message when no todo found', () => {
  let todos = [];
  let todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
  let $el = $(ReactDOM.findDOMNode(todoList));

  expect($el.find('.empty_list_msg').length).toBe(1);
 });

 it('should render one Todo component for each ToDo item', () => {
  var todos = [{
   id : 1,
   text : 'First todo',
   completed : false,
   completedAt : undefined,
   createdAt : 500
  },{
   id : 2,
   text : 'Second todo',
   completed : false,
   completedAt : undefined,
   createdAt : 500
  }];

  let store = configure({
   todos
  });

  let provider = TestUtils.renderIntoDocument(
   <Provider store={store}>
    <ConnectedToDoList/>
   </Provider>
  );

  const todosList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
  const todosComponents = TestUtils.scryRenderedComponentsWithType(todosList, ConnectedToDo);

  expect(todosComponents.length).toBe(todos.length);

 });

});
