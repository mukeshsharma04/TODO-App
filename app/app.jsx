import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';

require('./styles/app.scss');
injectTapEventPlugin();


ReactDOM.render(
 <Router history={browserHistory}>
  <Route path="/" component={Main}>
   <IndexRoute component={Home}/>
  </Route>
 </Router>,
 document.getElementById("app")
 );
