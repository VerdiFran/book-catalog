import firebase from '../../firebase'
import {message} from 'antd'

const SET_USER_DATA = 'SET-USER-DATA'
const TOGGLE_LOADING = 'TOGGLE-LOADING'

const initialState = {
    isAuth: false,
    email: '',
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

const setUserData = (isAuth, userData) => ({type: SET_USER_DATA, isAuth, userData})
const toggleLoading = (loading) => ({type: TOGGLE_LOADING, loading})

export const login = (email, password) => async (dispatch) => {
    dispatch(toggleLoading(true))

    const ref = firebase.firestore().collection('users')
    const snap = await ref
        .where('email', '==', email)
        .where('password', '==', password).get()

    const users = []
    snap.forEach(doc => users.push(doc.data()))

    if (users.length) {
        dispatch(setUserData(true, {email: users[0].email}))
    } else {
        message.error('Неверный email или пароль.', 5)
    }

    dispatch(toggleLoading(false))
}

export const register = (email, password) => async (dispatch) => {
    dispatch(toggleLoading(true))

    const ref = firebase.firestore().collection('users')
    const snap = await ref.where('email', '==', email).get()
    const users = []

    snap.forEach(doc => users.push(doc.data()))

    if (!users.length) {
        await ref.add({email, password})
    } else {
        message.error('Пользователь с таким email уже существует.')
    }

    dispatch(toggleLoading(false))
}

export default authReducer
