import React from 'react'
import TodoItem from './TodoItem'

const listStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: 25,
}

export default function TodoList({ todoArr, delTodo, doneTodo }) {
  return (
    <ul style={listStyles}>
      {todoArr.map((todo, index) => (
        <TodoItem
          index={index}
          todo={todo}
          key={index}
          delTodo={delTodo}
          doneTodo={doneTodo}
        />
      ))}
    </ul>
  )
}
