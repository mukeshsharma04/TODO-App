import React from 'react';
import ToDo  from './ToDo';
import ToDoList  from './ToDoList';
import SearchToDo  from './SearchToDo';
import AddToDo  from './AddToDo';
import uuid from 'node-uuid';
import TodoAPI from './../api/ToDoAPI';
import moment from 'moment';

var Home = React.createClass({
 getInitialState : function() {
  return {
   showCompleted : false,
   searchText : '',
   todos : TodoAPI.getTodos()
  };
 },

 componentDidUpdate : function() {
  TodoAPI.setTodos(this.state.todos);
 },

 handleNewToDo : function(item) {

  this.setState({
   todos : [
    ...this.state.todos,
    {
     id : uuid(),
     text : item,
     completed : false,
     createdAt : moment().unix(),
     completedAt : undefined
    }
   ]
  });
 },

 handleSearch : function (search_txt,shw_completed) {
  this.setState({
   showCompleted : shw_completed,
   searchText : search_txt.toLowerCase()
  });
 },

 render : function() {
  var {todos, showCompleted, searchText} = this.state;

  var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
     <div className="demo-card-square mdl-card mdl-shadow--2dp">
       <div className="mdl-card__supporting-text">
        <SearchToDo onSearch={this.handleSearch}/>
        <ToDoList/>
        <AddToDo onAddToDo={this.handleNewToDo}/>
       </div>
     </div>
   </div>
  </div>
  );
 }
});

module.exports = Home;
