import {connect} from 'react-redux'
import {register} from '../../redux/reducers/authReducer'
import Registration from './Registration'

export default connect(null, {register})(Registration)
