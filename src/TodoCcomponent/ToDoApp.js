import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default class ToDoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intputText: '',
      todoArr: [],
    }
  }

  getInputText = (event) => {
    this.setState({
      intputText: event.target.value,
    })
  }

  submit = (event) => {
    event.preventDefault()
    if (this.state.intputText) {
      this.setState({
        todoArr: [
          ...this.state.todoArr,
          { done: false, text: this.state.intputText },
        ],
        intputText: '',
      })
    }
  }

  doneItem = (id, checked) => {
    const newArr = this.state.todoArr
    newArr[id].done = checked
    this.setState({
      todoArr: newArr,
    })
  }

  delItem = (id) => {
    this.setState({
      todoArr: this.state.todoArr.filter((todo, i) => i !== id),
    })
  }

  render() {
    return (
      <div>
        <ToDoForm
          textValue={this.state.intputText}
          getInputText={this.getInputText}
          submit={this.submit}
        />
        <ToDoList
          todoArr={this.state.todoArr}
          delItem={this.delItem}
          doneItem={this.doneItem}
        />
      </div>
    )
  }
}
