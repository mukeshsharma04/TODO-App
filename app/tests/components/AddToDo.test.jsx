import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import AddToDo from './../../components/AddToDo';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";

describe('AddToDo', () => {
 it('should exist', () => {
  expect(AddToDo).toExist();
 });

 it('should call on when adding new todo item', () => {
  var spy = expect.createSpy();
  var AddToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(AddToDoForm));

  AddToDoForm.refs.add_todo.value = "hello checking add to do";
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith('hello checking add to do');
 });

 it('should not call on when adding empty todo item', () => {
  var spy = expect.createSpy();
  var AddToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(AddToDoForm));

  AddToDoForm.refs.add_todo.value = "";
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
 });
});
