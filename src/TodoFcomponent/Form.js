import React, { useState } from 'react'

export default function Form({ addNewTodo }) {
  const [inputText, setInputText] = useState('')

  function submit(event) {
    event.preventDefault()
    if (inputText) {
      addNewTodo(inputText)
      setInputText('')
    }
  }

  function getInputText(event) {
    setInputText(event.target.value)
  }

  return (
    <form onSubmit={submit}>
      <input value={inputText} onChange={getInputText}></input>
      <button>Add todo</button>
    </form>
  )
}
