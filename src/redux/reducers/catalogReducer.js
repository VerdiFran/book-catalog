import firebase from './../../firebase'

const TOGGLE_LOADING = 'TOGGLE-LOADING'
const SET_BOOKS = 'SET_BOOKS'
const SET_CURRENT_BOOK_INFO = 'SET-CURRENT-BOOK-INFO'

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
    loading: false,
    currentBookInfo: null,
    currentBookIsSet: false
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
        case SET_CURRENT_BOOK_INFO:
            return {
                ...state,
                currentBookInfo: action.currentBookInfo,
                currentBookIsSet: action.currentBookIsSet
            }
        default:
            return state
    }
}

const toggleLoading = value => ({type: TOGGLE_LOADING, value})
const setBooks = books => ({type: SET_BOOKS, books})
const setCurrentBookInfo = (currentBookInfo, currentBookIsSet) =>
    ({type: SET_CURRENT_BOOK_INFO, currentBookInfo, currentBookIsSet})

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

export const addBookToCatalog = (title, authors, publishingYear, isbn) => async () => {
    const ref = firebase.firestore().collection('books')
    await ref.add({title, authors, publishingYear, isbn})
}

export const deleteBook = isbn => async () => {
    const ref = firebase.firestore().collection('books')
    const snap = await ref.where('isbn', '==', isbn).get()

    snap.forEach(doc => doc.ref.delete())
}

export const editBook = (title, authors, publishingYear, isbn) => async () => {
    const ref = firebase.firestore().collection('books')
    const snap = await ref.where('isbn', '==', isbn).get()

    snap.forEach(doc => doc.ref.update({title, authors, publishingYear, isbn}))
}

export const setCurrentBookByIsbn = isbn => async dispatch => {
    dispatch(setCurrentBookInfo(null, false))

    const ref = firebase.firestore().collection('books')
    const snap = await ref.where('isbn', '==', isbn).get()

    const books = []
    snap.forEach(doc => books.push(doc.data()))

    dispatch(setCurrentBookInfo(books[0], true))
}

export default catalogReducer
