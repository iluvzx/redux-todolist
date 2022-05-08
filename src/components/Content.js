import { List, Button } from 'antd'
function Content({ todos }) {
  return (
    <>
      {
        todos.map(todo => {
          return (
            <List.Item key={todo.id}>
              <mark>{todo.name}</mark>
              <Button type='primary' danger>删除</Button>
            </List.Item>
          )
        })
      }
    </>
  )
}

export default Content