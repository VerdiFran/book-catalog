import {connect} from 'react-redux'
import {login} from '../../redux/reducers/authReducer'
import Login from './Login'
import {getIsAuth} from '../../utils/selectors/authSelectors'
import {Redirect} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

const LoginContainer = ({isAuth, login}) => {
    if (isAuth) return <Redirect to={TO_CATALOG}/>

    return <Login login={login}/>
}

export default connect(mapStateToProps, {login})(LoginContainer)
