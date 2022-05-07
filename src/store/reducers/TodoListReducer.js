const initialState = {
  todos: [
    { id: 1, name: 'todo1', done: false },
    { id: 2, name: 'todo2', done: false },
    { id: 3, name: 'todo2', done: true },
  ],
  value: ''
}

export default (state = initialState, action) => {
  return state
}