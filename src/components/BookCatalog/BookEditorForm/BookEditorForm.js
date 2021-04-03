import React from 'react'
import {Typography} from 'antd'
import BookFormContainer from '../BookFrom/BookFormContainer'
import styles from './BookEditorForm.module.scss'

/**
 * Component that contains form for editing book data
 *
 * @param {any} formValues Initial values for form
 * @param {function} handleSubmit Function for submitting edit form
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookEditorForm = ({formValues, handleSubmit}) => {
    const {Title} = Typography

    return (
        <div className={styles.formContainer}>
            <Title level={4}>Редактирование книги</Title>
            <BookFormContainer
                formValues={formValues}
                submitButtonText="Подтвердить"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default BookEditorForm
