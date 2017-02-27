import React from 'react';
import DrawerMenu from './DrawerMenu';
import AppBarNav from './AppBarNav';
import ToDoList  from './ToDoList';
import SearchToDo  from './SearchToDo';

var Main = (props) => {
 return (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
   mdl-layout--fixed-header">

   <AppBarNav />
   <DrawerMenu/>
   <main className="mdl-layout__content">
    <div className="page-content">
     {props.children}
    </div>
   </main>
  </div>

 );
}

module.exports = Main;
