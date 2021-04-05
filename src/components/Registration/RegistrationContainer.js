import {connect} from 'react-redux'
import {register} from '../../redux/reducers/authReducer'
import Registration from './Registration'
import {getIsAuth, getLoading} from '../../utils/selectors/authSelectors'
import {Redirect} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'

const mapStateToProps = (state) => ({
    loading: getLoading(state),
    isAuth: getIsAuth(state)
})

const RegistrationContainer = ({loading, isAuth, register}) => {
    if (isAuth) return <Redirect to={TO_CATALOG}/>

    return <Registration loading={loading} register={register}/>
}

export default connect(mapStateToProps, {register})(RegistrationContainer)
