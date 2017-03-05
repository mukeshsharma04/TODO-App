import React from 'react';
import expect from 'expect';
import {SearchToDo} from './../../components/SearchToDo';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";

describe('SearchToDo', () => {
 it('should exist', () => {
  expect(SearchToDo).toExist();
 });

 it('should dispatch setSearchText on input change', () => {
   let searchText = "i m here to test";

   let action = {
    type : 'SET_SEARCH_TEXT',
    searchText
   };

   const spy = expect.createSpy();
   let todoSearch = TestUtils.renderIntoDocument(<SearchToDo dispatch={spy}/>);

   todoSearch.refs.search_todo.value  = action.searchText;
   TestUtils.Simulate.change(todoSearch.refs.search_todo);

   expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted when checked', () => {
   let showCompleted = true;

   let action = {
    type : "TOGGLE_SHOW_COMPLETED"
   };

    const spy = expect.createSpy();
    let todoChecked = TestUtils.renderIntoDocument(<SearchToDo dispatch={spy}/>);

    todoChecked.refs.shw_completed.checked  = showCompleted;
    TestUtils.Simulate.change(todoChecked.refs.shw_completed);

    expect(spy).toHaveBeenCalledWith(action);
   });
});
