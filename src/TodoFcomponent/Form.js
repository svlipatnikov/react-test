import React, { useState } from 'react'

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
}

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
    <form onSubmit={submit} style={formStyle}>
      <input value={inputText} onChange={getInputText}></input>
      <button>
        <b>Add todo</b>
      </button>
    </form>
  )
}
