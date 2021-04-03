import firebase from './../../firebase'

const TOGGLE_LOADING = 'TOGGLE-LOADING'
const SET_BOOKS = 'SET_BOOKS'
const SET_CURRENT_BOOK_INFO = 'SET-CURRENT-BOOK-INFO'

const initialState = {
    books: [],
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

const toggleLoading = (value) => ({type: TOGGLE_LOADING, value})
const setBooks = (books) => ({type: SET_BOOKS, books})
const setCurrentBookInfo = (currentBookInfo, currentBookIsSet) =>
    ({type: SET_CURRENT_BOOK_INFO, currentBookInfo, currentBookIsSet})

export const getBookCatalog = () => dispatch => {
    dispatch(toggleLoading(true))

    const ref = firebase.firestore().collection('books')
    ref.onSnapshot((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
            items.push({
                ...doc.data(),
                id: doc.id
            })
        })
        dispatch(setBooks(items))
        dispatch(toggleLoading(false))
    })
}

export const addBookToCatalog = (title, authors, publishingYear, isbn) => async () => {
    const ref = firebase.firestore().collection('books')
    await ref.add({title, authors, publishingYear, isbn})
}

export const deleteBook = (id) => async () => {
    const ref = firebase.firestore().collection('books')
    await ref.doc(id).delete()
}

export const editBook = (id, title, authors, publishingYear, isbn) => async () => {
    const ref = firebase.firestore().collection('books')
    await ref.doc(id).update({title, authors, publishingYear, isbn})
}

export const setCurrentBookById = (id) => async dispatch => {
    dispatch(setCurrentBookInfo(null, false))

    const ref = firebase.firestore().collection('books')
    const doc = await ref.doc(id).get()
    const book = {
        ...doc.data(),
        id
    }

    dispatch(setCurrentBookInfo(book, true))
}

export default catalogReducer
