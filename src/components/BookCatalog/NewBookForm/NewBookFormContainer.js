import {connect} from 'react-redux'
import NewBookForm from './NewBookForm'
import {addBookToCatalog} from '../../../redux/reducers/catalogReducer'
import {compose} from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'

const NewBookFormContainer = (props) => {
    const {addBookToCatalog} = props

    const handleSubmit = (values) =>
        addBookToCatalog(values.title, values.authors, values.publishingYear, values.isbn)

    return <NewBookForm
        handleSubmit={handleSubmit}
    />
}

export default compose(
    withAuthRedirect,
    connect(null, {addBookToCatalog})
)(NewBookFormContainer)