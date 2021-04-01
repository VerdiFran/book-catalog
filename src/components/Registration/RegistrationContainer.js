import {connect} from 'react-redux'
import {register} from '../../redux/reducers/authReducer'
import Registration from './Registration'
import {getMessage} from '../../utils/selectors/authSelectors'

const mapStateToProps = (state) => ({
    message: getMessage(state)
})

export default connect(mapStateToProps, {register})(Registration)
