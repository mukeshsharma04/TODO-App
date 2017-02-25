import React from 'react';
import DrawerMenu from './DrawerMenu';
import AppBarNav from './AppBarNav';


var Main = (props) => {
 return (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
    mdl-layout--fixed-header">

    <AppBarNav />
    <DrawerMenu/>
    <main className="mdl-layout__content">
     <div className="page-content">
      <div className="mdl-grid">
       <div className="mdl-cell--3-offset mdl-cell mdl-cell--6-col">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp mdi-card-full" >
          {props.children}
          </div>
         </div>
        </div>
     </div>
    </main>
   </div>

 );
}

module.exports = Main;
