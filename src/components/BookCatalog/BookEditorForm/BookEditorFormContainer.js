import BookEditorForm from './BookEditorForm'
import {connect} from 'react-redux'
import {editBook} from '../../../redux/reducers/catalogReducer'
import {getCurrentBookInfo} from '../../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    currentBookInfo: getCurrentBookInfo(state)
})

const BookEditorFromContainer = ({currentBookInfo, editBook}) => {
    const handleSubmit = (values) =>
        editBook(values.id, values.title, values.authors, values.publishingYear, values.isbn)

    return <BookEditorForm
        formValues={currentBookInfo}
        handleSubmit={handleSubmit}
    />
}

export default connect(mapStateToProps, {editBook})(BookEditorFromContainer)
