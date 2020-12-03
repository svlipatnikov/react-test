import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibility: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }))
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h1>now visible!</h1>
          <button onClick={this.handleClick}>Click</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Click</button>
        </div>
      )
    }
  }
}
