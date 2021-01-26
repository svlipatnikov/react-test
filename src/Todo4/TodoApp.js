import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import { Context } from './context'
import reducer from './reduser'

export default function TodoApp() {
  const [input, setInput] = useState('')

  const [todoArr, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos'))
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoArr) || JSON.stringify([]))
  }, [todoArr])

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'add', payload: input })
      setInput('')
    }
  }

  return (
    <Context.Provider value={{ dispatch }}>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={addTodo}
        ></input>
        <TodoList todoArr={todoArr} />
      </div>
    </Context.Provider>
  )
}
