import React from 'react'
import BookFormContainer from '../BookFrom/BookFormContainer'
import {Typography} from 'antd'

const NewBookForm = ({handleSubmit}) => {
    const {Title} = Typography

    return (
        <div>
            <Title>Добавление книги</Title>
            <BookFormContainer
                submitButtonText="Добавить"
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default NewBookForm
