import React, { Component } from 'react'

// const classDone = {
//   textDecoration: 'line-through',
// }

export default class ToDoItem extends Component {
  delToDOItem = (event) => {
    event.preventDefault()
    this.props.delItem(this.props.number - 1)
  }

  changeDone = (event) => {
    this.props.doneItem(this.props.number - 1, !this.props.todo.done)
  }

  render() {
    return (
      <li className="Todo-item" key={this.props.number}>
        <input
          className="Todo-item-checkBox"
          type="checkbox"
          checked={this.props.todo.done}
          onChange={this.changeDone}
        />

        <div
          className={
            this.props.todo.done ? 'Todo-item-text todo-done' : 'Todo-item-text'
          }
        >
          {this.props.number + '. ' + this.props.todo.text}
        </div>

        <button className="Todo-item-Xbutton" onClick={this.delToDOItem}>
          X
        </button>
      </li>
    )
  }
}
