export const setSearchText = (searchText) =>  {
 return  {
  type : 'SET_SEARCH_TEXT',
  searchText
 };
};

export const toggleShowCompleted = () => {
 return {
  type : 'TOGGLE_SHOW_COMPLETED'
 };
};

export const addToDo = (text) => {
 return {
  type : 'ADD_TODO',
  text
 };
};

export const toggleToDo = (id) => {
 return {
  type : 'TOGGLE_TODO',
  id
 };
};
