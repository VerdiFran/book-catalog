import BookEditorForm from './BookEditorForm'
import {connect} from 'react-redux'
import {editBook} from '../../../redux/reducers/catalogReducer'
import {getCurrentBookInfo, getCurrentBookIsSet} from '../../../utils/selectors/catalogSelectors'
import {Spin} from 'antd'
import {compose} from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'

const mapStateToProps = (state) => ({
    currentBookInfo: getCurrentBookInfo(state),
    currentBookIsSet: getCurrentBookIsSet(state)
})

const BookEditorFromContainer = ({currentBookInfo, currentBookIsSet, editBook}) => {
    const handleSubmit = (values) =>
        editBook(values.id, values.title, values.authors, values.publishingYear, values.isbn)

    if (!currentBookIsSet) return <Spin><BookEditorForm/></Spin>

    return <BookEditorForm
        formValues={currentBookInfo}
        handleSubmit={handleSubmit}
    />
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {editBook})
)(BookEditorFromContainer)
