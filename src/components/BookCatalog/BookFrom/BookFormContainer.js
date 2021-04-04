import BookForm from './BookForm'

/**
 * Container component for common book form
 *
 * @param {any} formValues Initial values for form
 * @param {string} submitButtonText Text for submit button
 * @param {function} handleSubmit Handle submit
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookFormContainer = ({formValues, submitButtonText, handleSubmit}) => {
    const initialValues = formValues || {
        title: '',
        authors: [''],
        publishingYear: null,
        isbn: ''
    }

    return <BookForm
        initialValues={initialValues}
        submitButtonText={submitButtonText}
        handleSubmit={handleSubmit}
    />
}

export default BookFormContainer
