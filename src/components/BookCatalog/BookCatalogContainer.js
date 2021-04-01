import BookCatalog from './BookCatalog'
import {connect} from 'react-redux'
import {getBooks, getLoading} from '../../utils/selectors/catalogSelectors'
import {useEffect} from 'react'
import {addBookToCatalog, deleteBook, editBook, getBookCatalog} from '../../redux/reducers/catalogReducer'

const mapStateToProps = (state) => ({
    books: getBooks(state),
    loading: getLoading(state)
})

/**
 * Container component that wrapped table of books and actions
 * @param books
 * @param loading
 * @param getBookCatalog
 * @param addBookToCatalog
 * @returns {JSX.Element}
 * @constructor
 */
const BookCatalogContainer = ({books, loading, getBookCatalog, addBookToCatalog}) => {
    useEffect(() => {
        getBookCatalog()
    }, [])

    if (loading) return <h1>Loading...</h1>

    return <BookCatalog
        data={books}
        addBook={addBookToCatalog}
    />
}

export default connect(mapStateToProps, {getBookCatalog, addBookToCatalog, deleteBook, editBook})(BookCatalogContainer)
