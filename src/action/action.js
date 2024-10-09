export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
