import uuid from 'node-uuid';
import moment from 'moment';

export const searchTextReducer = (state = '', action) => {
 switch (action.type) {
  case 'SET_SEARCH_TEXT':
   return action.searchText;
  default:
   return state;
 }
};

export const toggleShowCompletedReducer = (state = false, action) => {
 switch (action.type) {
  case 'TOGGLE_SHOW_COMPLETED':
    return !state;
  default:
   return state;
 }
};

export const todosReducer = (state = [], action) => {
 switch (action.type) {
  case 'ADD_TODO':
   return [
    ...state,
    {
     id : uuid(),
     text : action.text,
     completed : false,
     createdAt : moment().unix(),
     completedAt : undefined
    }
   ];
  case 'TOGGLE_TODO' :
   return state.map(function(todo){
    if(todo.id === action.id) {
     let completed = todo.completed;
     return {
      ...todo,
      completed : !completed,
      completedAt : (!completed) ? moment().unix() : undefined
     };
    } else {
     return todo;
    }
   });
  default:
   return state;
 }
};
