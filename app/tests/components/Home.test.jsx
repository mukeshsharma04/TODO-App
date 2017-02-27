import React from 'react';
import expect from 'expect';
import Home from './../../components/Home';
import AddToDo from './../../components/AddToDo';
import ToDoList from './../../components/ToDoList';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";

describe('Home', () => {
 it('should exist', () => {
  expect(Home).toExist();
 });

 it('should add new todo on AddToDo', () => {
  var new_todo = 'Hey i am the test todo item';
  var todoApp = TestUtils.renderIntoDocument(<Home/>);
      todoApp.setState({todos:[]});
      todoApp.handleNewToDo(new_todo);

      expect(todoApp.state.todos[0].text).toBe(new_todo);
 });

 it('should toogle completed value on handleToggle', () => {
  var todoData = {
   id : 11,
   text : "Hey i am here to chekc togggle",
   completed : false
  };

  var todoApp = TestUtils.renderIntoDocument(<Home/>);
      todoApp.setState({todos:[todoData]});
      expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(todoApp.state.todos[0].id);
      expect(todoApp.state.todos[0].completed).toBe(true);
 });

});
