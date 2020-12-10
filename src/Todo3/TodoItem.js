import React from 'react'

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

export default function todoItem({ todo, index, delTodo, doneTodo }) {
  return (
    <li style={todoStyles}>
      <span style={todo.done ? doneStyle : {}}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => doneTodo(index)}
        ></input>
        {(index + 1, '. ' + todo.text)}
      </span>
      <button onClick={() => delTodo(index)}>X</button>
    </li>
  )
}
