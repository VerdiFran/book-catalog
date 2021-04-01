import firebase from '../../firebase'

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    isAuth: false,
    email: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

const setUserData = (isAuth, userData) => ({type: SET_USER_DATA, isAuth, userData})

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

export const register = (email, password) => async () => {
    const ref = firebase.firestore().collection('users')
    try {
        await ref.add({email, password})
    } catch (e) {
        console.log(e)
    }
}

export default authReducer
