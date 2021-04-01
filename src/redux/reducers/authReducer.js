import firebase from '../../firebase'
import {userIdGenerator} from '../../utils/generators/userIdGenerator'

const SET_USER_DATA = 'SET-USER-DATA'
const SET_MESSAGE = 'SET-MESSAGE'

const userIdIterator = userIdGenerator()

const initialState = {
    isAuth: false,
    email: '',
    message: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

const setUserData = (isAuth, userData) => ({type: SET_USER_DATA, isAuth, userData})
const setMessage = (message) => ({type: SET_MESSAGE, message})

export const login = (email, password) => async dispatch => {
    const ref = firebase.firestore().collection('users')
    const snap = await ref
        .where('email', '==', email)
        .where('password', '==', password).get()

    const users = []
    snap.forEach(doc => users.push(doc.data()))

    if (users.length) {
        dispatch(setUserData(true, {email: users[0].email}))
    }
}

export const register = (email, password) => async dispatch => {
    const ref = firebase.firestore().collection('users')

    const snap = await ref.where('email', '==', email).get()

    const users = []
    snap.forEach(doc => users.push(doc.data()))

    if (users.length) {
        dispatch(setMessage('Пользователь с таким email уже существует, попробуйте другой.'))
    } else {
        const id = userIdIterator.next().value

        try {
            await ref.add({id, email, password})
        } catch (e) {
            console.log(e)
        }
    }
}

export default authReducer
