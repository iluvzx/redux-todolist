import { INSERTTODO, HANDLEINPUTCHANGE, DELETETODO, SELECTEDTODO, SELECTEDALLTODO } from '../actions/TodoActionsTypes'

const initialState = {
  todos: [
    { id: 1, name: '吃饭', done: false },
    { id: 2, name: '睡觉', done: true },
    { id: 3, name: '打豆豆', done: true },
  ],
  value: '',
  checkAll: false
}

// eslint-disable-next-line
export default (state = initialState, { type, value, index }) => {
  switch (type) {
    case HANDLEINPUTCHANGE:
      return {
        todos: state.todos,
      }
    case INSERTTODO:
      return {
        todos: [{ name: state.value, done: false }, ...state.todos]
      }
    case DELETETODO:
      return {
        todos: state.todos.filter((_, indey) => indey !== index)
      }
    case SELECTEDTODO:
      const newArr = [...state.todos]
      newArr[index].done = !newArr[index].done
      return {
        todos: newArr 
      }
    case SELECTEDALLTODO:
      // TODO
    default:
      return state
  }
}