
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO , SET_NEW_TODO ,SET_EDITING_TODO , SAVE_TODO} from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text }
});










export const setNewTodo = (text) => ({
  type: SET_NEW_TODO,
  payload: text
});

export const setEditingTodo = (id, text) => ({
  type: SET_EDITING_TODO,
  payload: { id, text }
});

export const saveTodo = (id, text) => ({
  type: SAVE_TODO,
  payload: { id, text }
});