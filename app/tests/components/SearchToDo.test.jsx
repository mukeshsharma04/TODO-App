import React from 'react';
import expect from 'expect';
import SearchToDo from './../../components/SearchToDo';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";


describe('SearchToDo', () => {
 it('should exist', () => {
  expect(SearchToDo).toExist();
 });

 it('should call on search with entered input text', () => {
  var searchText = "i m here to test";
  var spy = expect.createSpy();
  var todosearch = TestUtils.renderIntoDocument(<SearchToDo onSearch={spy}/>);

  todosearch.refs.search_todo.value  = searchText;
  TestUtils.Simulate.change(todosearch.refs.search_todo);

  expect(spy).toHaveBeenCalledWith('i m here to test', false);

 });

 it('should call on search with checked value', () => {
  var showCompleted = true;
  var spy = expect.createSpy();
  var todosearch = TestUtils.renderIntoDocument(<SearchToDo onSearch={spy}/>);

  todosearch.refs.shw_completed.checked  = showCompleted;
  TestUtils.Simulate.change(todosearch.refs.shw_completed);

  expect(spy).toHaveBeenCalledWith('', true);
 });

});
