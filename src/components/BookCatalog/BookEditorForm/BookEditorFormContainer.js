import BookEditorForm from './BookEditorForm'
import {connect} from 'react-redux'
import {editBook} from '../../../redux/reducers/catalogReducer'
import {getCurrentBookInfo, getCurrentBookIsSet} from '../../../utils/selectors/catalogSelectors'
import {Spin} from 'antd'

const mapStateToProps = (state) => ({
    currentBookInfo: getCurrentBookInfo(state),
    currentBookIsSet: getCurrentBookIsSet(state)
})

const BookEditorFromContainer = ({currentBookInfo, currentBookIsSet, editBook}) => {
    const handleSubmit = (values) =>
        editBook(values.title, values.authors, values.publishingYear, values.isbn)

    if (!currentBookIsSet) return <Spin><BookEditorForm/></Spin>

    return <BookEditorForm
        formValues={currentBookInfo}
        handleSubmit={handleSubmit}
    />
}

export default connect(mapStateToProps, {editBook})(BookEditorFromContainer)
