import BookForm from './BookForm'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
})

const BookFormContainer = (props) => {
    const {formValues} = props

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
