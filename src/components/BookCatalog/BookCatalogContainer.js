import BookCatalog from './BookCatalog'
import {connect} from 'react-redux'
import {getBooks, getLoading} from '../../utils/selectors/catalogSelectors'
import {useEffect} from 'react'
import {deleteBook, editBook, getBookCatalog} from '../../redux/reducers/catalogReducer'

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
 * @returns {JSX.Element}
 * @constructor
 */
const BookCatalogContainer = ({books, loading, getBookCatalog, deleteBook}) => {
    useEffect(() => {
        getBookCatalog()
    }, [])

    if (loading) return <h1>Loading...</h1>

    return <BookCatalog
        data={books}
        deleteBook={deleteBook}
    />
}

export default connect(mapStateToProps, {getBookCatalog, deleteBook, editBook})(BookCatalogContainer)
