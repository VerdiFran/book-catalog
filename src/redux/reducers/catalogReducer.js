import firebase from './../../firebase'

const TOGGLE_LOADING = 'TOGGLE-LOADING'
const SET_BOOKS = 'SET_BOOKS'
const SET_CURRENT_BOOK_DATA = 'SET-CURRENT-BOOK-DATA'

const initialState = {
    books: [],
    loading: false,
    currentBookData: null,
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
        case SET_CURRENT_BOOK_DATA:
            return {
                ...state,
                currentBookData: action.currentBookData,
                currentBookIsSet: action.currentBookIsSet
            }
        default:
            return state
    }
}

const toggleLoading = (value) => ({type: TOGGLE_LOADING, value})
const setBooks = (books) => ({type: SET_BOOKS, books})
const setCurrentBookData = (currentBookData, currentBookIsSet) =>
    ({type: SET_CURRENT_BOOK_DATA, currentBookData, currentBookIsSet})

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
    dispatch(setCurrentBookData(null, false))

    const ref = firebase.firestore().collection('books')
    const doc = await ref.doc(id).get()
    const book = {
        ...doc.data(),
        id
    }

    dispatch(setCurrentBookData(book, true))
}

export default catalogReducer
