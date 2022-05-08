import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions/TodoActions'
import { Checkbox, Space } from 'antd'


function Footer({ length, doneTodo, selectedAllTodo }) {
  return (
    <Space>
      <Checkbox defaultChecked={doneTodo === length ? true : false} onChange={() => console.log('功能开发中')} />
      <span>已完成{doneTodo}/未完成{length - doneTodo}/全部{length}</span>
    </Space>
  )
}

// 映射action到props
const mapDispatchProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(() => ({}), mapDispatchProps)(Footer)