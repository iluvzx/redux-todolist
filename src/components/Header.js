import { Input } from 'antd'
import { connect } from 'react-redux'
// import HeaderReducer from '../store/reducers/HeaderReducer'

function Header(props) {
  return (
    <Input
      placeholder='你今天要做什么？'
      size='large'
      value={props.value}
      onChange={e => props.handleInputChange(e)}
    />
  )
}

const mapStateToProps = state => ({
  value: state.HeaderReducer.value
})

const mapDispatchProps = dispatch => ({
  handleInputChange(e) {
    dispatch({
      type: 'handleInputChange',
      value: e.target.value
    })
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Header)