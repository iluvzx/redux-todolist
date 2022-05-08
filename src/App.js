import { connect } from 'react-redux'

import { List, Button } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'

import './App.css'
import { Component } from 'react'

// function App(props) {
//   return (
//     <div className="container">
//       <List
//         size="large"
//         header={<Header />}
//         footer={<Footer />}
//         bordered
//         dataSource={props.todos}
//         renderItem={todo =>
//           <List.Item style={{display: 'flex'}}>
//             {todo.name}
//             <Button danger>删除</Button>
//           </List.Item>}
//       />
//     </div>
//   )
// }


class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="container">
        <List
          size="large"
          header={<Header value={this.props.value} insertTodo={() => this.insertTodo()} />}
          footer={<Footer />}
          bordered
          dataSource={this.props.todos}
          renderItem={todo => <List.Item>{todo.name}</List.Item>}
        />
      </div>
    )
  }

}



const mapStateToProps = state => ({
  todos: state.TodoListReducer.todos,
})



export default connect(mapStateToProps)(App)