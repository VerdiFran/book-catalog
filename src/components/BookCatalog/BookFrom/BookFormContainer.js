import BookForm from './BookForm'
import {connect} from 'react-redux'
import {getCurrentBookIsSet} from '../../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    currentBookIsSet: getCurrentBookIsSet(state)
})

const BookFormContainer = (props) => {
    const {currentBookIsSet, formValues} = props

    if (!currentBookIsSet) return <h1>Loading...</h1>

    const initialValues = formValues || {
        title: '',
        authors: [''],
        publishingYear: null,
        isbn: ''
    }

    return <BookForm
        initialValues={initialValues}
        submitButtonText={props.submitButtonText}
        handleSubmit={props.handleSubmit}
    />
}

export default connect(mapStateToProps)(BookFormContainer)
