import BookCatalog from './BookCatalog'
import {connect} from 'react-redux'
import {getBooks} from '../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    books: getBooks(state)
})

/**
 * Container component that wrapped table of books and actions
 * @param books
 * @returns {JSX.Element}
 * @constructor
 */
const BookCatalogContainer = ({books}) => {
    return <BookCatalog data={books}/>
}

export default connect(mapStateToProps, null)(BookCatalogContainer)
