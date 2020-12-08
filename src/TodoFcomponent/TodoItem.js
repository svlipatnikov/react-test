import React from 'react'

const ItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #fff',
  borderRadius: '5px',
  margin: '1rem',
  width: '300px',
}

// const doneStyle = {
//   textDecoration: 'line-through',
// }

export default function TodoItem({ index, todo, delTodo, doneTodo }) {
  function delIltem() {
    delTodo(index)
  }

  function doneItem() {
    doneTodo(index, !todo.done)
  }

  return (
    <li style={ItemStyles}>
      <span>
        <input
          type="checkbox"
          style={{ margin: '15px' }}
          onChange={doneItem}
          checked={todo.done}
        />
        {index + 1 + '. ' + todo.text}
      </span>
      <button onClick={delIltem}>X</button>
    </li>
  )
}
