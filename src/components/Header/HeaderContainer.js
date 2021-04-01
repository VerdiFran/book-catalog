import {connect} from 'react-redux'
import Header from './Header'
import {getIsAuth, getUserData} from '../../utils/selectors/authSelectors'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    userData: getUserData(state)
})

export default connect(mapStateToProps)(Header)