import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todoArr }) {
  return (
    <ul>
      {todoArr.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  )
}
