export default function (state, action) {
  switch (action.type) {
    default:
      return state

    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ]

    case 'del':
      return state.filter((todo) => todo.id !== action.payload)

    case 'done':
      return state.map((todo) => {
        if (todo.id === action.payload) todo.done = !todo.done
        return todo
      })
  }
}
