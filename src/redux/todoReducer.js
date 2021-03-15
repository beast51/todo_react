import {
  CREATE_TODO,
  DELETE_TODO,
  IS_COMPLETED_TODO,
  EDIT_TODO,
  IS_EDIT_MODE,
  GET_TODO_FROM_LS,
} from "./types";
const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { todoList: [...state.todoList, action.payload] };

    case DELETE_TODO:
      return {
        todoList: [
          ...state.todoList.filter((elem) => elem.id !== action.payload),
        ],
      };

    case IS_COMPLETED_TODO:
      return {
        todoList: state.todoList.map((elem) => {
            if (elem.id === action.payload) {
                return {
                    ...elem,
                    completed:!elem.completed,
                }
            }
    
            return elem
          }),
      };

    case IS_EDIT_MODE:
      state.todoList.forEach((elem) => {
        if (elem.id === action.payload) {
          elem.edit = !elem.edit;
        }
      });
      return {
        todoList: [...state.todoList],
      };

    case EDIT_TODO:
      state.todoList.forEach((elem) => {
        if (elem.id === action.payload.id) {
          elem.text = action.payload.text;
        }
      });
      return {
        todoList: [...state.todoList],
      };

    case GET_TODO_FROM_LS:
      return {
        todoList: [...JSON.parse(localStorage.getItem("todoList") || "[]")],
      };

    default:
      return state;
  }
};
