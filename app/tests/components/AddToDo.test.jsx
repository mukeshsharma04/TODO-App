import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {AddToDo} from './../../components/AddToDo';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";


describe('AddToDo', () => {
 it('should exist', () => {
  expect(AddToDo).toExist();
 });

 it('should dispatch new item on ADD_TODO', () => {
  let todoText = "Hey i am new test text";
  let action = {
   type : 'ADD_TODO',
   text : todoText
  };

  const spy = expect.createSpy();

  let addToDO = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
  const $el = $(ReactDOM.findDOMNode(addToDO));

  addToDO.refs.add_todo.value = todoText;
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith(action);
 });

 it('should not dispatch new item on invalid ADD_TODO', () => {
  let todoText = "";

  const spy = expect.createSpy();
  let addToDO = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
  const $el = $(ReactDOM.findDOMNode(addToDO));

  addToDO.refs.add_todo.value = todoText;
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
 });
});
