import {ADD_TODO, GET_TODO_FROM_LS, IS_COMPLETE_TODO, DELETE_TODO, TODO_EDIT_MODE_TOGGLE, EDIT_TODO, SET_TODO_TO_LS} from './constants';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function getTodoFromLS() {
    return {
        type: GET_TODO_FROM_LS
    }
}

export function setTodoToLS() {
    return {
        type: SET_TODO_TO_LS
    }
}

export function isCompleteTodo(id) {
    return {
        type: IS_COMPLETE_TODO,
        payload: id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function todoEditModeToggle(id) {
    return {
        type: TODO_EDIT_MODE_TOGGLE,
        payload: id
    }
}

export function editTodo(id, text) {
    return {
        type: EDIT_TODO,
        payload: {id, text}
    }
}

