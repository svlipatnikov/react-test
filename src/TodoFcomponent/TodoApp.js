import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default function TodoApp() {
  const [todoArr, setTodoArr] = useState([])

  function addNewTodo(todoText) {
    setTodoArr((lastArr) => [...lastArr, { text: todoText, done: false }])
  }

  function delTodo(id) {
    setTodoArr((lastArr) => lastArr.filter((todo, index) => id !== index))
  }

  function doneTodo(id, doneFlag) {
    let newArr = todoArr
    newArr[id].done = doneFlag
    console.log(newArr)
    setTodoArr(newArr)
  }

  return (
    <div>
      <Form addNewTodo={addNewTodo} />
      <TodoList todoArr={todoArr} delTodo={delTodo} doneTodo={doneTodo} />
    </div>
  )
}
