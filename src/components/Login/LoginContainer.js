import {connect} from 'react-redux'
import {login} from '../../redux/reducers/authReducer'
import Login from './Login'

export default connect(null, {login})(Login)
