import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO
} from './constants'

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
})

export const editTodo = todoId => ({
    type: EDIT_TODO,
    payload: todoId
})

export const deleteTodo = todoId => ({
    type: DELETE_TODO,
    payload: todoId
})