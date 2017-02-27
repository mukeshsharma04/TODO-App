import React from 'react';


var ToDo = React.createClass({
 render : function() {
  var {id,text,completed} = this.props;

  return (
     <li onClick={() => {this.props.onToggle(id)}}  className="list mdl-list__item mdl-list__item--three-line">
       <span className="mdl-list__item-primary-content">
         <span>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={id}>
            <input type="checkbox" checked={completed} id={id} className="mdl-checkbox__input"/>
            <span className="mdl-checkbox__label">{text}</span>
          </label>
         </span>
         <span className="mdl-list__item-text-body list-txt">
           Created Feb 25th @ 12:43AM
         </span>
       </span>

     </li>
  );
 }
});

module.exports = ToDo;
