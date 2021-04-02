import React from 'react'
import {Typography} from 'antd'
import BookFormContainer from '../BookFrom/BookFormContainer'
import styles from './BookEditorForm.module.scss'

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
