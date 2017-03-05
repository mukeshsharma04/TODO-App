import React from 'react';
import ToDo from './ToDo.jsx';
import AddToDo  from './AddToDo';
import {connect} from 'react-redux';
import TodoAPI from './../api/ToDoAPI';
export var ToDoList = React.createClass({

render : function() {
 var {todos, showCompleted, searchText} = this.props;
 var renderTodos = () => {
  console.log(todos);
  if(todos.length === 0) {
   return (
    <p className="empty_list_msg">Nothing ToDo</p>
   );
  }

  return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
   return (
    <ToDo key={todo.id} {...todo} />
   );
  });
 };

 return (
  <div className="mdl-grid">
   <div className="mdl-cell mdl-cell--12-col">
    <ul className="demo-list-icon mdl-list">
     {renderTodos()}
    </ul>
   </div>

  </div>
 );
}
});

export default connect(
 (state) => {
  return state;
 }
)(ToDoList);
