import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'

import { addTodo } from '../redux/actions'

import './styles.css'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const onInputChange = e => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        if(!input)
            return
        const newTodo = {
            text: input,
            id: uuidv4()
        }
        dispatch(addTodo(newTodo))
        setInput('')
    }

    const handleKeyPress = e => {
        //it triggers by pressing the enter key
        if (e.code === 'Enter') {
            handleAdd();
        }
    }

    return (
        <div className='add-todo-wrapper'>
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='add-todo'
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                ref={inputRef}
            />
            <button
                className='add-todo-button'
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    )
}

export default AddTodo