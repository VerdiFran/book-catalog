import {connect} from 'react-redux'
import {register} from '../../redux/reducers/authReducer'
import Registration from './Registration'
import {getLoading} from '../../utils/selectors/authSelectors'

const mapStateToProps = (state) => ({
    loading: getLoading(state)
})

export default connect(mapStateToProps, {register})(Registration)
