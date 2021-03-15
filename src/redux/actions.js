import { CREATE_TODO, DELETE_TODO, IS_COMPLETED_TODO, EDIT_TODO, IS_EDIT_MODE, GET_TODO_FROM_LS } from "./types";

export function createTodo(todo) {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function isCompletedTodo(id) {
    return {
        type: IS_COMPLETED_TODO,
        payload: id
    }
}

export function isEditMode(id) {
    return {
        type: IS_EDIT_MODE,
        payload: id
    }
}

export function editTodo(id, text) {
    return {
        type: EDIT_TODO,
        payload: {id, text}
    }
}

export function getTodoFromLS() {
    return {
        type: GET_TODO_FROM_LS
    }
}