export default function (state, action) {
  switch (action.type) {
    default:
      return state

    case 'done':
      // const newArr = [...state]
      // newArr[action.payload].done = !newArr[action.payload].done
      // return newArr
      return state.map((todo, id) => {
        console.log(id, todo)
        if (id === action.payload) todo.done = !todo.done
        return todo
      })

    case 'delete':
      return state.filter((todo, id) => id !== action.payload)

    case 'addTodo':
      return [...state, { text: action.payload, done: false }]
  }
}
