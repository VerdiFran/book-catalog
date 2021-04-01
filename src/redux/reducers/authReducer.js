import firebase from '../../firebase'

const SET_AUTH_DATA = 'SET-AUTH-DATA'

const initialState = {
    isAuth: false,
    email: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

const setIsAuth = (isAuth, userData) => ({type: SET_AUTH_DATA, isAuth, userData})

export const login = (email, password) => dispatch => {
    const ref = firebase.firestore().collection('users')
    ref.onSnapshot((querySnapshot) => {
        for (const doc of querySnapshot) {
            const {userEmail, userPassword} = doc.data()
            if (userEmail === email && userPassword === password) {
                dispatch(setIsAuth(true))
                break
            }
        }
    })
}

export const register = (email, password) => async () => {
    const ref = firebase.firestore().collection('users')
    try {
        await ref.add({email, password})
    } catch (e) {
        console.log(e)
    }
}

export default authReducer
