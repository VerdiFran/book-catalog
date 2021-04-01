import {connect} from 'react-redux'
import NewBookForm from './NewBookForm'
import {addBookToCatalog} from '../../../redux/reducers/catalogReducer'

export default connect(null, {addBookToCatalog})(NewBookForm)