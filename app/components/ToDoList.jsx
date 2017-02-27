import React from 'react';
import ToDo from './ToDo.jsx';
import AddToDo  from './AddToDo';

var ToDoList = React.createClass({

render : function() {
 var {todos} = this.props;
 var renderTodos = () => {
  return todos.map((todo) => {
   return (
    <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = ToDoList;
