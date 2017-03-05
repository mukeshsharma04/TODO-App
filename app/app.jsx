import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import {setSearchText, addToDo, toggleShowCompleted, toggleToDo, addToDos} from './actions/actions';
import {Provider} from 'react-redux';
import ToDoAPI from './api/ToDoAPI';
import {configure} from './store/configureStore';

const store = configure();
require('./styles/app.scss');
injectTapEventPlugin();

store.subscribe(() => {
 const state = store.getState();
 console.log("New state", state);
 ToDoAPI.setTodos(state.todos);
});

var initalTodos = ToDoAPI.getTodos();
store.dispatch(addToDos(initalTodos));

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
