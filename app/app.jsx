import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import {setSearchText, addToDo, toggleShowCompleted, toggleToDo} from './actions/actions';
import {Provider} from 'react-redux';
const store = require('./store/configureStore').configure();
require('./styles/app.scss');
injectTapEventPlugin();

store.subscribe(() => {
 console.log("new state", store.getState());
});

store.dispatch(addToDo('New Todo Text'));
store.dispatch(setSearchText('New'));
store.dispatch(toggleShowCompleted());


ReactDOM.render(
 <Provider store={store}>
   <Router history={browserHistory}>
    <Route path="/" component={Main}>
     <IndexRoute component={Home}/>
    </Route>
   </Router>
 </Provider>,
 document.getElementById("app")
 );
