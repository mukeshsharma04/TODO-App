import React from 'react';

var List = (props) => {
 return (
  <ul className="demo-list-icon mdl-list">
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     React
    </span>
   </li>
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     React-router
    </span>
   </li>
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     material-design-lite
    </span>
   </li>
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     Karma with expect Library
    </span>
   </li>
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     Express
    </span>
   </li>
   <li className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
     Axios for API
    </span>
   </li>
  </ul>
 );
}

module.exports = List;
