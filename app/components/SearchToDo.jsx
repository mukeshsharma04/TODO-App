import React from 'react';


var SearchToDo = React.createClass({
 render : function() {
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
     <form action="#">
      <div className="mdl-textfield mdl-js-textfield">
       <input
        className="mdl-textfield__input"
        type="text"
        id="add_todo"/>
       <label
        className="mdl-textfield__label"
        htmlFor="add_todo">
        Search todos here.......
       </label>
      </div>
     </form>

        <span className="mdl-list__item-primary-content">
           <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-1">
             <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" />
             <span className="mdl-checkbox__label">Show completed todos</span>
           </label>
        </span>

    </div>
   </div>
  );
 }
});

module.exports = SearchToDo;
