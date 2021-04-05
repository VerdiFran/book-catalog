import BookEditorForm from './BookEditorForm'
import {connect} from 'react-redux'
import {editBook} from '../../../redux/reducers/catalogReducer'
import {getCurrentBookData, getCurrentBookIsSet} from '../../../utils/selectors/catalogSelectors'
import {Spin} from 'antd'
import {compose} from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'

const mapStateToProps = (state) => ({
    currentBookData: getCurrentBookData(state),
    currentBookIsSet: getCurrentBookIsSet(state)
})

/**
 * Container component for book editor form
 *
 * @param {any} currentBookData Data about selected book
 * @param {boolean} currentBookIsSet Set indicator for current book
 * @param {function} editBook Edit book data
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookEditorFromContainer = ({currentBookData, currentBookIsSet, editBook}) => {
    const handleSubmit = (values) =>
        editBook(values.id, values.title, values.authors, values.publishingYear, values.isbn)

    if (!currentBookIsSet) return <Spin><BookEditorForm/></Spin>

    return <BookEditorForm
        formValues={currentBookData}
        handleSubmit={handleSubmit}
    />
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {editBook})
)(BookEditorFromContainer)
