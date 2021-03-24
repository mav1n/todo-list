import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO
} from './constants'

const reducer = (state = [], action) => {
    let updatedTodos = [...state]
    switch (action.type) {

        case ADD_TODO:
            updatedTodos.push(action.payload)
            return updatedTodos

        case EDIT_TODO:
            let index = -1
            updatedTodos.forEach((todo, idx) => {
                if(todo.id === action.payload.id) {
                    index = idx
                }
            })
            if(index > -1) {
                updatedTodos[index] = action.payload
            }
            return updatedTodos

        case DELETE_TODO:
            updatedTodos = updatedTodos.filter(todo => todo.id !== action.payload)
            return updatedTodos
    }
    return state
}

export default reducer
