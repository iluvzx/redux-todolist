import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions/TodoActions'
import { List, Button, Checkbox, Space } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App({ todos, deleteTodo }) {
  return (
    <div className="container">
      <List
        size="large"
        header={<Header />}
        footer={<Footer length={todos.length} doneTodo={todos} />}
        bordered
        dataSource={todos}
        renderItem={(todo, index) =>
          <List.Item style={{ display: 'flex' }}>
            <Space>
              <Checkbox />
              <span>{todo.name}</span>
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