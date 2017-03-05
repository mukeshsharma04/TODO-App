import React from 'react';
import {connect} from 'react-redux';
import {setSearchText,toggleShowCompleted} from './../actions/actions'

export var SearchToDo = React.createClass({

 render : function() {
  const {dispatch, showCompleted, searchText} = this.props;
  return (
   <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <div className="mdl-textfield mdl-js-textfield">
       <input onChange={() => {
         let refsearchText = this.refs.search_todo.value;
         dispatch(setSearchText(refsearchText));
        }} value={searchText} ref="search_todo" className="mdl-textfield__input" type="text" id="search_todo"/>
       <label className="mdl-textfield__label" htmlFor="search_todo">
        Search todos here.......  </label>
      </div>

     <span className="mdl-list__item-primary-content">
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="shw_completed">
       <input ref="shw_completed" checked={showCompleted} onChange={() => {
         dispatch(toggleShowCompleted());
        }} type="checkbox" id="shw_completed" className="mdl-checkbox__input" />
       <span className="mdl-checkbox__label">Show completed todos</span>
      </label>
     </span>

    </div>
   </div>
  );
 }
});

export default connect(
 (state) => {
   return {
    showCompleted : state.showCompleted,
    searchText : state.searchText
   }
 }
)(SearchToDo);
