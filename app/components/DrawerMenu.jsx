import React from 'react';
import {Link, IndexLink}  from 'react-router';


var DrawerMenu = (props) => {
 return (
  <div className="mdl-layout__drawer hel">
   <span
    className="mdl-layout-title" >
    TODO APP
   </span>
   <nav className="mdl-navigation">
    <ul className="demo-list-item mdl-list">
     <li className="mdl-list__item">
      <IndexLink to="/" activeClassName="active">
       TODOS
      </IndexLink>
     </li>
    </ul>
   </nav>
  </div>
 );
}

module.exports = DrawerMenu;
