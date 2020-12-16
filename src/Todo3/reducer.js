export default function (state, action) {
  switch (action.type) {
    default:
      return state

    case 'done':
      const newArr = [...state]
      newArr.forEach((todo, id) => {
        if (todo[id] === action.payload) {
          todo[id] = !todo[id]
        }
      })
      return newArr

    case 'delete':
      return state.filter((todo, id) => id !== action.payload)

    case 'addTodo':
      return [...state, { done: false, text: action.payload }]
  }
}
