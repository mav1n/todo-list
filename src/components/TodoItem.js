import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTodo, editTodo } from '../redux/actions'

const TodoItem = ({ todo }) => {

    const [editable, setEditable] = useState(false)
    const [todoText, setTodoText] = useState(todo.text)
    const inputRef = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if(editable)
            inputRef.current.focus();
    }, [editable]);

    const handleInputChange = e => {
        setTodoText(e.target.value)
    }

    const handleClick = () => {
        if(!todoText)
            return
            
        if(editable) {
            const updatedTodo = {
                text: todoText,
                id: todo.id
            }
            dispatch(editTodo(updatedTodo))
        }
        setEditable(!editable)
    }

    const handleKeyPress = e => {
        //it triggers by pressing the enter key
        if (e.code === 'Enter') {
            handleClick();
        }
    }

    const handleCheckboxChange = e => {
        const updatedTodo = {
            ...todo,
            completed: e.target.checked,
            completionDate: new Date().toLocaleDateString()
        }
        dispatch(editTodo(updatedTodo))
    }

    return (
        <div className='todo-item-wrapper'>
            <div className='checkbox-wrapper'>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={handleCheckboxChange}
                />
            </div>
            <div className='todo-text-wrapper'>
                {editable ? 
                    <input
                        className='edit-todo-input'
                        type='text'
                        value={todoText}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        ref={inputRef}
                    />
                    :
                    todo.text
                }
            </div>
            {todo.completed ?
                <span className='date-wrapper'>
                    {todo.completionDate}
                </span>
                :
                <>
                    {
                        editable ?
                        <i className="material-icons" onClick={handleClick}>save</i>
                        :
                        <i className="material-icons" onClick={handleClick}>edit</i>
                    }
                </>
            }
            <i
                className="material-icons"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                delete
            </i>
        </div>
    )
}

export default TodoItem