import { Checkbox, Space } from 'antd'

function Footer({ length,doneTodo }) {
  return (
    <Space>
      <Checkbox />
      <span>已完成{doneTodo.filter(todo => todo.done).length}/全部{length}</span>
    </Space>
  )
}

export default Footer