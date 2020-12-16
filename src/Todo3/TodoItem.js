import React, { useContext } from 'react'
import { TodoContext } from './context'

const todoStyles = {
  border: '1px none #ccc',
  borderRadius: '5px',
  backgroundColor: '#555',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '5px',
}

const doneStyle = {
  textDecoration: 'line-through',
}

export default function TodoItem({ todo, index }) {
  const { dispatch } = useContext(TodoContext)

  return (
    <li style={todoStyles}>
      <span style={todo.done ? doneStyle : {}}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch({ type: 'done', payload: index })}
        ></input>
        {(index + 1, '. ' + todo.text)}
      </span>
      <button onClick={() => dispatch({ type: 'delete', payload: index })}>
        X
      </button>
    </li>
  )
}
