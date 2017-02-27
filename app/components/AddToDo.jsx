import React from 'react';


var AddToDo = React.createClass({

 handleFormSubmit : function(e) {
  e.preventDefault();
  var get_to_do = this.refs.add_todo.value;
  if(get_to_do) {
   this.refs.add_todo.value = "";
   this.props.onAddToDo(get_to_do);
  }
 },

 render : function() {
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
     <form ref="add_frm" onSubmit={this.handleFormSubmit}>
      <div className="mdl-textfield mdl-js-textfield">
       <input ref="add_todo" className="mdl-textfield__input" type="text" id="add_todo"/>
       <label className="mdl-textfield__label" htmlFor="add_todo">
        Type here to add todo...
       </label>
      </div>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
       Add ToDo
      </button>
     </form>
    </div>
   </div>
  );
 }
});

module.exports = AddToDo;
