import React from 'react';
import ToDo from './ToDo.jsx';
import AddToDo  from './AddToDo';
import {connect} from 'react-redux';

export var ToDoList = React.createClass({

render : function() {
 var {todos} = this.props;
 var renderTodos = () => {
  console.log(todos);
  if(todos.length === 0) {
   return (
    <p className="empty_list_msg">Nothing ToDo</p>
   );
  }

  return todos.map((todo) => {
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
  return {
   todos : state.todos
  };
 }
)(ToDoList);
