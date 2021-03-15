import {
  ADD_TODO,
  GET_TODO_FROM_LS,
  SET_TODO_TO_LS,
  IS_COMPLETE_TODO,
  DELETE_TODO,
  TODO_EDIT_MODE_TOGGLE,
  EDIT_TODO,
} from "./constants";

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, action.payload] };

    case GET_TODO_FROM_LS:
      return {
        todoList: [...JSON.parse(localStorage.getItem("todoList") || "[]")],
      };

    case SET_TODO_TO_LS:
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
      return state

    case IS_COMPLETE_TODO:
      return {
        todoList: state.todoList.map((elem) => {
          if (elem.id === action.payload) {
            return {
              ...elem,
              completed: !elem.completed,
            };
          }
          return elem;
        }),
      };

    case DELETE_TODO:
      return {
        todoList: [
          ...state.todoList.filter((elem) => elem.id !== action.payload),
        ],
      };

    case TODO_EDIT_MODE_TOGGLE:
      state.todoList.forEach((elem) => {
        if (elem.id === action.payload) {
          elem.edit = !elem.edit;
        }
      });
      return { todoList: [...state.todoList] };

    case EDIT_TODO:
      state.todoList.forEach((elem) => {
        if (elem.id === action.payload.id) {
          if (action.payload.text.trim() !== "") {
            elem.text = action.payload.text;
            elem.edit = !elem.edit;
          } else {
            elem.edit = !elem.edit;
          }
        }
      });
      return { todoList: [...state.todoList] };

    default:
      return state;
  }
};
