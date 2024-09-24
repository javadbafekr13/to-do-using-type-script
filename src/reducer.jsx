
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO,SET_NEW_TODO, SET_EDITING_TODO ,SAVE_TODO } from './actionTypes';
const initialState = {
  todos: [],
  newTodo: "",
  editingTodo: { id: null, text: "" },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case SET_NEW_TODO:
      return { ...state, newTodo: action.payload };
    case SET_EDITING_TODO:
      return {
        ...state,
        editingTodo: { id: action.payload.id, text: action.payload.text },
      };
    case SAVE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        editingTodo: { id: null, text: "" },
      };
    default:
      return state;
  }
};

export default todoReducer;

