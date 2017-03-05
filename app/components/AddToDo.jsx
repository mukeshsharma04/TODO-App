import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from './../actions/actions'

export var AddToDo = React.createClass({

 handleFormSubmit : function(e) {
  e.preventDefault();
  const {dispatch} = this.props;
  var todoText = this.refs.add_todo.value;
  if(todoText) {
   this.refs.add_todo.value = "";
   dispatch(addToDo(todoText));
  }else {
    this.refs.add_todo.focus();
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

export default connect()(AddToDo);
