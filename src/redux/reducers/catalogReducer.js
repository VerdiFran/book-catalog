import firebase from './../../firebase'

const TOGGLE_LOADING = 'TOGGLE-LOADING'
const SET_BOOKS = 'SET_BOOKS'

const initialState = {
    books: [
        {
            title: 'JavaScript. Шаблоны',
            authors: ['Стоян Стефанов'],
            publishingYear: 2011,
            isbn: '978-5-93286-208-7'
        },
        {
            title: 'JavaScript. Подробное руководство. 6-е издание',
            authors: ['Дэвид Флэнаган'],
            publishingYear: 2012,
            isbn: '978-5-93286-215-5'
        },
        {
            title: 'Чистый код: создание, анализ и рефакторинг',
            authors: ['Роберт Мартин'],
            publishingYear: 2013,
            isbn: '978-5-496-00487-9'
        }
    ],
    loading: false
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case SET_BOOKS:
            return {
                ...state,
                books: action.books
            }
        default:
            return state
    }
}

const toggleLoading = value => ({type: TOGGLE_LOADING, value})
const setBooks = books => ({type: SET_BOOKS, books})

export const getBookCatalog = () => dispatch => {
    dispatch(toggleLoading(true))

    const ref = firebase.firestore().collection('books')
    ref.onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        })
        dispatch(setBooks(items))
        dispatch(toggleLoading(false))
    })
}

export default catalogReducer
