import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from '../components/TodoItem'

export default function TodoList() {

    const todoList = useSelector(state => state)

    let activeTasks = []
    let completedTasks = []

    todoList.forEach(todo => todo.completed ? completedTasks.push(todo) : activeTasks.push(todo))

    return (
        <div className='todo-list-wrapper'>
            {!!(activeTasks.length) && 
                <>
                    <h4>Active</h4>
                    {
                        activeTasks.map(todo => <TodoItem key={todo.id} todo={todo} />)
                    }
                </>
            }
            {!!(completedTasks.length) && 
                <>
                    <h4>Completed</h4>
                    {
                        completedTasks.map(todo => <TodoItem key={todo.id} todo={todo} />)
                    }
                </>
            }
        </div>
    )
}
