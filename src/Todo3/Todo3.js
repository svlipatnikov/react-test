import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default function Todo3() {
  const [todoArr, setTodoArr] = useState([{ text: 'todo1', done: false }])

  const delTodo = (id) => {
    setTodoArr((lastArr) => lastArr.filter((todo, index) => id !== index))
  }

  const addTodo = (todoText) => {
    setTodoArr((lastArr) => [...lastArr, { text: todoText, done: false }])
  }

  const doneTodo = (id) => {
    const newArr = [...todoArr]
    newArr[id].done = !newArr[id].done
    setTodoArr(newArr)
  }

  return (
    <div>
      <Form addTodo={addTodo} />
      <TodoList todoArr={todoArr} delTodo={delTodo} doneTodo={doneTodo} />
    </div>
  )
}
