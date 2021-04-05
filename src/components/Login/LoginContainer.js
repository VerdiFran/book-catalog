import {connect} from 'react-redux'
import {login} from '../../redux/reducers/authReducer'
import Login from './Login'
import {getIsAuth} from '../../utils/selectors/authSelectors'
import {Redirect} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'
import {getLoading} from '../../utils/selectors/authSelectors'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    loading: getLoading(state)
})

const LoginContainer = ({isAuth, loading, login}) => {
    if (isAuth) return <Redirect to={TO_CATALOG}/>

    return <Login loading={loading} login={login}/>
}

export default connect(mapStateToProps, {login})(LoginContainer)
