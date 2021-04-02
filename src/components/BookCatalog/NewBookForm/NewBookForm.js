import React from 'react'
import BookFormContainer from '../BookFrom/BookFormContainer'
import {Typography} from 'antd'
import styles from './NewBookForm.module.scss'

const NewBookForm = ({handleSubmit}) => {
    const {Title} = Typography

    return (
        <div className={styles.formContainer}>
            <Title level={5}>Добавление книги</Title>
            <BookFormContainer
                submitButtonText="Подтвердить"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default NewBookForm
