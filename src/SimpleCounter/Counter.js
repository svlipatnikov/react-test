import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    // контекст для обычных функций
    this.reset = this.reset.bind(this)
  }

  // стрелочные функции, т.к. не создают контекст
  increment = () => this.setState((state) => ({ counter: ++state.counter }))
  decrement = () => this.setState((state) => ({ counter: --state.counter }))

  // для примера обычная функция, нужен bind в конструкторе
  reset() {
    this.setState((state) => ({ counter: 0 }))
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
        <h1>Counter: {this.state.counter}</h1>
      </div>
    )
  }
}
