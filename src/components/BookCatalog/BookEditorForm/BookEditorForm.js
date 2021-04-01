import React from 'react'
import {Typography} from 'antd'
import BookFormContainer from '../BookFrom/BookFormContainer'

const BookEditorForm = ({formValues, handleSubmit}) => {
    const {Title} = Typography

    return <div>
        <Title>Редактирование книги</Title>
        <BookFormContainer
            formValues={formValues}
            submitButtonText="Подтвердить"
            handleSubmit={handleSubmit}
        />
    </div>
}

export default BookEditorForm
