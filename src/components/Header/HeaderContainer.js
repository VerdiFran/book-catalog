import {connect} from 'react-redux'
import Header from './Header'
import {getIsAuth, getUserData} from '../../utils/selectors/authSelectors'
import {logout} from '../../redux/reducers/authReducer'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    userData: getUserData(state)
})

export default connect(mapStateToProps, {logout})(Header)