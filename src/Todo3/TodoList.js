import React from 'react'
import TodoItem from './TodoItem'

const listStyles = {
  listStyle: 'none',
  margin: '5px',
  padding: '5px',
  width: '400px',
}

export default function TodoList({ todoArr }) {
  return (
    <ul style={listStyles}>
      {todoArr.map((todo, index) => {
        return <TodoItem todo={todo} index={index} key={index} />
      })}
    </ul>
  )
}
