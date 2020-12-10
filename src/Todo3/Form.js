import React, { useState } from 'react'

export default function Form({ addTodo }) {
  const [inputText, setInputText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    addTodo(inputText)
    setInputText('')
  }

  return (
    <form onSubmit={submit}>
      <input
        value={inputText}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button>Add todo</button>
    </form>
  )
}
