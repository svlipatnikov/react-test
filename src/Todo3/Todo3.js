import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { TodoContext } from './context'

export default function Todo3() {
  const [todoArr, setTodoArr] = useState([])

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
    <TodoContext.Provider value={{ delTodo, doneTodo }}>
      <>
        <Form addTodo={addTodo} />
        <TodoList todoArr={todoArr} />
      </>
    </TodoContext.Provider>
  )
}
