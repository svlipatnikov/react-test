import React, { Component } from 'react'

export default class ToDoForm extends Component {
  render() {
    return (
      <form>
        <input
          value={this.props.textValue}
          onChange={this.props.getInputText}
        />
        <button type="submit" onClick={this.props.submit}>
          Add ToDo
        </button>
      </form>
    )
  }
}
