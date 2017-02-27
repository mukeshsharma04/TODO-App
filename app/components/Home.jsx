import React from 'react';
import ToDo  from './ToDo';
import ToDoList  from './ToDoList';
import SearchToDo  from './SearchToDo';
import AddToDo  from './AddToDo';
import uuid from 'node-uuid';
import TodoAPI from './../api/ToDoAPI';

var Home = React.createClass({
 getInitialState : function() {
  return {
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
     completed : false
    }
   ]
  });
 },

 handleToggle : function(id) {
  var updatedTodos = this.state.todos.map((todo) => {
   if(todo.id === id) {
    todo.completed = !todo.completed;
   }

   return todo;
  });

  this.setState({todos : updatedTodos});
 },

 render : function() {
  console.log(this.state);
  var {todos} = this.state;
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
     <div className="demo-card-square mdl-card mdl-shadow--2dp">
       <div className="mdl-card__supporting-text">
        <SearchToDo/>
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleNewToDo}/>
       </div>
     </div>
   </div>
  </div>
  );
 }
});

module.exports = Home;
