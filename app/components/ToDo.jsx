import React from 'react';
import moment from 'moment';

var ToDo = React.createClass({
 render : function() {
  var {id,text,completed, createdAt, completedAt} = this.props;
  var renderDate = () => {
   var ts = moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');
   var msg = 'created';

   if(completed) {
    msg = 'Completed';
   }

   return msg + ts;
  };
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
           {renderDate()}
         </span>
       </span>

     </li>
  );
 }
});

module.exports = ToDo;
