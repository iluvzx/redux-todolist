import { Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/TodoActions'

function Header(props) {
  return (
    <Input
      placeholder='添加一些待办事件，按回车键确认~'
      size='large'
      value={props.value}
      onChange={ev => props.handleInputChange(ev)}
      onPressEnter={() => props.insertTodo()}
    />
  )
}

// 映射状态到props
const mapStateToProps = state => ({
  value: state.TodoListReducer.value
})

// 映射action到props
const mapDispatchProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(Header)