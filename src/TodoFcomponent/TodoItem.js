import React from 'react'

const itemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #fff',
  borderRadius: '5px',
  margin: '5px',
  padding: '5px',
  width: '400px',
  // verticalAlign: 'middle',
}

const spanStyle = {
  // display: 'flex',
  // justifyContent: 'left',
}

const doneStyle = {
  textDecoration: 'line-through',
  color: 'grey',
}

export default function TodoItem({ index, todo, delTodo, doneTodo }) {
  function delIltem() {
    delTodo(index)
  }

  function doneItem() {
    doneTodo(index)
  }

  return (
    <li style={itemStyles}>
      <span style={todo.done ? { ...spanStyle, ...doneStyle } : spanStyle}>
        <input
          type="checkbox"
          style={{ width: '1.5em', height: '1.5em' }}
          onChange={doneItem}
          checked={todo.done}
        />
        {index + 1 + '. ' + todo.text}
      </span>
      <button onClick={delIltem} style={{ width: '2em', height: '2em' }}>
        <b>X</b>
      </button>
    </li>
  )
}
