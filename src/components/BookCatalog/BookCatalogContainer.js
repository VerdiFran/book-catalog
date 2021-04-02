import BookCatalog from './BookCatalog'
import {connect} from 'react-redux'
import {getBooks, getLoading} from '../../utils/selectors/catalogSelectors'
import {useEffect} from 'react'
import {deleteBook, editBook, getBookCatalog, setCurrentBookByIsbn} from '../../redux/reducers/catalogReducer'
import {compose} from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => ({
    books: getBooks(state),
    loading: getLoading(state)
})

/**
 * Container component that wrapped table of books and actions
 * @param books
 * @param loading
 * @param getBookCatalog
 * @param deleteBook
 * @param setCurrentBookById
 * @returns {JSX.Element}
 * @constructor
 */
const BookCatalogContainer = ({books, loading, getBookCatalog, deleteBook, setCurrentBookByIsbn}) => {
    useEffect(() => {
        getBookCatalog()
    }, [])

    return <BookCatalog
        loading={loading}
        data={books}
        deleteBook={deleteBook}
        setCurrentBook={setCurrentBookByIsbn}
    />
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getBookCatalog, deleteBook, editBook, setCurrentBookByIsbn})
)(BookCatalogContainer)
