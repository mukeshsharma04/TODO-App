import $ from 'jquery';

module.exports = {
 setTodos : function(todos) {
  if($.isArray(todos)) {
   localStorage.setItem('todos',JSON.stringify(todos));
   return todos;
  }
 },

 getTodos : function() {
  var strTodos = localStorage.getItem('todos');
  var todos = [];

  try {
   todos = JSON.parse(strTodos);
  }catch(e) {
   console.log("Exceptions");
  }

  return $.isArray(todos) ? todos : [];
 },

 filterTodos : function(todos, showCompleted, searchText) {
  var filteredTodos = todos;

  filteredTodos = filteredTodos.filter((todo) => {
   return !todo.completed || showCompleted ;
  });


  filteredTodos = filteredTodos.filter((todo) => {
   var text = todo.text.toLowerCase();
   var search = searchText.toLowerCase();
   return search.length === 0 || text.indexOf(search) > -1;
  });

  filteredTodos.sort((a,b) => {
   if(!a.completed && b.completed) {
    return -1;
   } else if (a.completed && !b.completed) {
    return 1;
   }else {
    return 0;
   }
  });

  return filteredTodos;
 }
}
