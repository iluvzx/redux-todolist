import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions/TodoActions'
import { List, Button, Checkbox, Space } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'


// 计算已完成的数量
const getDoneTodoTotal = todos => {
  let total = 0
  todos.forEach(todo => {
    if (todo.done) total += 1
  })
  return total
}


function App({ todos, deleteTodo, selectedTodo }) {
  return (
    <div className="container">
      <List
        size="large"
        header={<Header />}
        footer={<Footer length={todos.length} doneTodo={getDoneTodoTotal(todos)} />}
        bordered
        dataSource={todos}
        renderItem={(todo, index) =>
          <List.Item style={{ display: 'flex' }}>
            <Space>
              <Checkbox defaultChecked={todo.done ? true : false} onChange={() => selectedTodo(index)} />
              <span className={todo.done ? 'done' : ''}>{todo.name}</span>
            </Space>
            <Button type='primary' danger onClick={() => deleteTodo(index)}>删除
            </Button>
          </List.Item>}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.TodoListReducer.todos,
})

const mapDispatchProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(App)