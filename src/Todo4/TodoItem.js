import React, { useContext } from 'react'
import { Context } from './context'

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
  borderRadius: '5px',
  background: '#555',
  margin: '5px',
  padding: '5px',
}

const doneStyle = {
  textDecoration: 'line-through',
  color: '#999',
}

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(Context)

  return (
    <li style={itemStyle}>
      <span style={todo.done ? doneStyle : {}}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {
            dispatch({ type: 'done', payload: todo.id })
          }}
        ></input>
        {todo.text}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'del', payload: todo.id })
        }}
      >
        X
      </button>
    </li>
  )
}
