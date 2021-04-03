import React from 'react'
import BookFormContainer from '../BookFrom/BookFormContainer'
import {Typography} from 'antd'
import styles from './NewBookForm.module.scss'

/**
 * Component that contains form for adding book
 *
 * @param {function} handleSubmit Function for submitting adding form
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NewBookForm = ({handleSubmit}) => {
    const {Title} = Typography

    return (
        <div className={styles.formContainer}>
            <Title level={4}>Добавление книги</Title>
            <BookFormContainer
                submitButtonText="Подтвердить"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default NewBookForm
