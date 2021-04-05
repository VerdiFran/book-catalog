import BookForm from './BookForm'
import {connect} from 'react-redux'
import {getLoading} from '../../../utils/selectors/catalogSelectors'

const mapStateToProps = (state) => ({
    loading: getLoading(state)
})

/**
 * Container component for common book form
 *
 * @param {any} formValues Initial values for form
 * @param {boolean} loading Loading state
 * @param {string} submitButtonText Text for submit button
 * @param {function} handleSubmit Handle submit
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookFormContainer = ({formValues, loading, submitButtonText, handleSubmit}) => {
    const initialValues = formValues || {
        title: '',
        authors: [''],
        publishingYear: null,
        isbn: ''
    }

    return <BookForm
        initialValues={initialValues}
        loading={loading}
        submitButtonText={submitButtonText}
        handleSubmit={handleSubmit}
    />
}

export default connect(mapStateToProps)(BookFormContainer)
