import React from 'react';


var SearchToDo = React.createClass({
 handleSearch : function() {
  var showCompleted = this.refs.shw_completed.checked;
  var search_todo = this.refs.search_todo.value;
  this.props.onSearch(search_todo, showCompleted);
 },

 render : function() {
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <div className="mdl-textfield mdl-js-textfield">
       <input onChange={this.handleSearch} ref="search_todo" className="mdl-textfield__input" type="text" id="search_todo"/>
       <label className="mdl-textfield__label" htmlFor="search_todo">
        Search todos here.......  </label>
      </div>

     <span className="mdl-list__item-primary-content">
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="shw_completed">
       <input ref="shw_completed" onChange={this.handleSearch} type="checkbox" id="shw_completed" className="mdl-checkbox__input" />
       <span className="mdl-checkbox__label">Show completed todos</span>
      </label>
     </span>

    </div>
   </div>
  );
 }
});

module.exports = SearchToDo;
