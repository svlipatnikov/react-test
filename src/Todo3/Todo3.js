import React, { useEffect, useReducer } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { TodoContext } from './context'
import reducer from './reducer'

export default function Todo3() {
  const [todoArr, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos') || JSON.stringify([]))
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoArr))
  }, [todoArr])

  //const [todoArr, setTodoArr] = useState([])

  //ComponentDidMount
  // useEffect(() => {
  //   const lsTodos = localStorage.getItem('todos') || JSON.stringify([])
  //   setTodoArr(JSON.parse(lsTodos))
  // }, [])

  // const delTodo = (id) => {
  //   setTodoArr((lastArr) => lastArr.filter((todo, index) => id !== index))
  // }

  // const addTodo = (todoText) => {
  //   setTodoArr((lastArr) => [...lastArr, { text: todoText, done: false }])
  // }

  // const doneTodo = (id) => {
  //   const newArr = [...todoArr]
  //   newArr[id].done = !newArr[id].done
  //   setTodoArr(newArr)
  // }

  return (
    <TodoContext.Provider value={{ dispatch }}>
      <>
        <Form dispatch={dispatch} />
        <TodoList todoArr={todoArr} />
      </>
    </TodoContext.Provider>
  )
}
