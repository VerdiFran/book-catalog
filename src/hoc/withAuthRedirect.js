import {connect} from 'react-redux'
import {getIsAuth} from '../utils/selectors/authSelectors'
import {Redirect} from 'react-router-dom'
import {TO_LOGIN} from '../routes'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

/**
 * HOC that returns redirect to login if user is not authenticated
 *
 * @param Component Component that will be wrapped and protected
 * @returns Component
 */
const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={TO_LOGIN}/>

        return <Component {...props}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect
