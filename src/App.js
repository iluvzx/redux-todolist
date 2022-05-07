import { connect } from 'react-redux'

import { List } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'

import './App.css'

function App(props) {
  return (
    <div className="container">
      <List
        header={<Header />}
        dataSource={props.todos}
        renderItem={todo => <List.Item>{todo.name}</List.Item>}
        footer={<Footer />}
      />
    </div>
  )
}


const mapStateToProps = state => ({
  todos: state.todos,
})



export default connect(mapStateToProps)(App)