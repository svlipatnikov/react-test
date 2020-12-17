import React, { useState } from 'react'

export default function Form({ dispatch }) {
  const [inputText, setInputText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    dispatch({ type: 'addTodo', payload: inputText })
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
