import BookCatalog from './BookCatalog'
import {connect} from 'react-redux'
import {getBooks} from '../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    books: getBooks(state)
})

const BookCatalogContainer = (props) => {
    const {books} = props

    return <BookCatalog data={books}/>
}

export default connect(mapStateToProps, null)(BookCatalogContainer)
