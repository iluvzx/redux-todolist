const initialState = {
  value: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'handleInputChange':
      console.log('hello')
      return {
        value: action.value
      }
    default:
      return state
  }

}