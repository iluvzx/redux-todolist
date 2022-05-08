import { INSERTTODO, HANDLEINPUTCHANGE } from '../actions/TodoActionsTypes'

const initialState = {
  todos: [
    { id: 1, name: 'todo1', done: false },
    { id: 2, name: 'todo2', done: false },
    { id: 3, name: 'todo2', done: true },
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
        todos: [{name: state.value} ,...state.todos]
      }
    default:
      return state
  }
}