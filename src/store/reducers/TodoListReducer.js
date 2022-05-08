import { INSERTTODO, HANDLEINPUTCHANGE, DELETETODO } from '../actions/TodoActionsTypes'

const initialState = {
  todos: [
    { id: 1, name: '吃饭', done: false },
    { id: 2, name: '睡觉', done: true },
    { id: 3, name: '打豆豆', done: true },
  ],
  value: ''
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLEINPUTCHANGE:
      return {
        todos: state.todos,
        value: action.value
      }
    case INSERTTODO:
      return {
        todos: [{name: state.value, done: false} ,...state.todos]
      }
    case DELETETODO:
      return {
        todos: state.todos.filter((_, index) => index !== action.index)
      }
    default:
      return state
  }
}