import React from 'react';
import expect from 'expect';
import Home from './../../components/Home';
import AddToDo from './../../components/AddToDo';
import {ToDoList} from './../../components/ToDoList';
import TestUtils from 'react-addons-test-utils';
import $ from "jquery";
import {Provider} from 'react-redux';
import {configure} from './../../store/configureStore';

describe('Home', () => {
 it('should exist', () => {
  expect(Home).toExist();
 });

 it('should render todo LIST', () => {
  let store = configure();
  let provider = TestUtils.renderIntoDocument(
   <Provider store={store}>
    <Home/>
   </Provider>
  );

  const home = TestUtils.scryRenderedComponentsWithType(provider, Home)[0]
  const toDoList = TestUtils.scryRenderedComponentsWithType(home, ToDoList);

  expect(toDoList.length).toEqual(1);
 });
});
