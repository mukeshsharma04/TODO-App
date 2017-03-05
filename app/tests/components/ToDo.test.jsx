import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {ToDo} from './../../components/ToDo';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";

describe('ToDo', () => {
 it('should exist', () => {
  expect(ToDo).toExist();
 });

 it('should dispatch toggleTodo on click',() => {
  var todoData = {
   id : 19,
   text : "Hey i am here to check toggle on prop with id",
   completed : true
  };

  var spy = expect.createSpy();
  var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} dispatch={spy}/>);

  var $el = $(ReactDOM.findDOMNode(todo));
  TestUtils.Simulate.click($el[0]);

  expect(spy).toHaveBeenCalledWith({
   type : 'TOGGLE_TODO',
   id : todoData.id
  });

 });

});
