import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import './ToDoItem.css'

export default class ToDoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todoArr.map((todo, index) => (
          <ToDoItem
            key={index}
            number={index + 1}
            todo={todo}
            delItem={this.props.delItem}
            doneItem={this.props.doneItem}
          />
        ))}
      </ul>
    )
  }
}
