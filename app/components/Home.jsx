import React from 'react';
import ToDo  from './ToDo';
import ToDoList  from './ToDoList';
import SearchToDo  from './SearchToDo';
import AddToDo  from './AddToDo';
import uuid from 'node-uuid';
import moment from 'moment';

var Home = React.createClass({
 render : function() {
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--2-offset mdl-cell--8-col">
     <div className="demo-card-square mdl-card mdl-shadow--2dp">
       <div className="mdl-card__supporting-text">
        <SearchToDo/>
        <ToDoList/>
        <AddToDo/>
       </div>
     </div>
   </div>
  </div>
  );
 }
});

module.exports = Home;
