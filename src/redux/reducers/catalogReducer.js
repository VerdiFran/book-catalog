import firebase from './../../firebase'
import {message} from 'antd'

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

/**
 * Get book catalog from firestore and set it to redux store
 * @returns {function(*): void}
 */
export const getBookCatalog = () => (dispatch) => {
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

/**
 * Add book to catalog with firebase
 * @param {string} title Title of book
 * @param {string[]} authors Authors of book
 * @param {number} publishingYear Year of publishing
 * @param {string} isbn ISBN of book
 * @returns {function(*): Promise<void>}
 */
export const addBookToCatalog = (title, authors, publishingYear, isbn) =>
    async (dispatch) => {
        dispatch(toggleLoading(true))

        try {
            const ref = firebase.firestore().collection('books')
            await ref.add({title, authors, publishingYear, isbn})

            dispatch(toggleLoading(false))

            message.success('Книга добавлена в каталог.')
        } catch (e) {
            message.error('Возникла какая-то ошибка.')
        }
    }

/**
 * Delete book from catalog with firebase
 * @param {string} id Document (book) ID
 * @returns {function(*): Promise<void>}
 */
export const deleteBook = (id) => async () => {
    const ref = firebase.firestore().collection('books')
    await ref.doc(id).delete()
}

/**
 * Update book data with firebase
 * @param {string} id Document (book) ID
 * @param {string} title Title of book
 * @param {string[]} authors Authors of book
 * @param {number} publishingYear Year of publishing
 * @param {string} isbn ISBN of book
 * @returns {function(*): Promise<void>}
 */
export const editBook = (id, title, authors, publishingYear, isbn) =>
    async (dispatch) => {
        dispatch(toggleLoading(true))

        try {
            const ref = firebase.firestore().collection('books')
            await ref.doc(id).update({title, authors, publishingYear, isbn})

            dispatch(toggleLoading(false))

            message.success('Данные книги обновлены.')
        } catch (e) {
            message.error('Возникла какая-то ошибка.')
        }
    }

/**
 * Get selected book data from firestore and set it to redux store
 * @param {string} id Document (book) ID
 * @returns {function(*): Promise<void>}
 */
export const setCurrentBookById = (id) => async (dispatch) => {
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
