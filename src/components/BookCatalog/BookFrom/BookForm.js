import React, {useState} from 'react'
import {Button, Form, Input} from 'antd'
import {MinusSquareOutlined, PlusSquareOutlined} from '@ant-design/icons'
import {FieldArray, Formik} from 'formik'
import styles from './BookForm.module.scss'
import * as Yup from 'yup'
// eslint-disable-next-line no-unused-vars
import {checkIsbn} from '../../../utils/validators/checkIsbn'

/**
 * Component that contains common form for editing and adding book
 *
 * @param {any} initialValues Initial values for form
 * @param {string} submitButtonText Text for submit button
 * @param {function} handleSubmit Handle submit
 *
 * @returns {JSX.Element}
 * @constructor
 */
const BookForm = ({initialValues, submitButtonText, handleSubmit}) => {
    const BookSchema = Yup.object().shape({
        title: Yup.string()
            .required('Это поле обязательно для заполнения.'),
        publishingYear: Yup.number()
            .required('Это поле обязательно для заполнения.')
            .max(new Date().getFullYear(), 'Книги в будущем еще не издаются, проверьте правильность ввода.'),
        isbn: Yup.string()
            .required('Это поле обязательно для заполнения.')
            .isValidIsbn('Неправильный ISBN.')
    })

    const [publishingYearWarning, setPublishingYearWarning] = useState(false)
    const [validateErrors, setValidateErrors] = useState({})

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={BookSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({
                  values,
                  handleSubmit,
                  handleChange,
                  validateForm
              }) => (
                <Form layout="vertical">
                    <Form.Item
                        label="Название"
                        validateStatus={validateErrors.title && 'error'}
                        help={validateErrors.title}
                    >
                        <Input
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="Авторы">
                        <FieldArray name="authors">
                            {({remove, push}) => (
                                <div>
                                    {
                                        values.authors.length > 0 &&
                                        values.authors.map((author, index) => (
                                            <div
                                                key={index}
                                                className={styles.authorsFieldContainer}
                                            >
                                                <Input
                                                    value={author}
                                                    name={`authors.${index}`}
                                                    onChange={handleChange}
                                                />
                                                <Button
                                                    onClick={() => remove(index)}
                                                    icon={<MinusSquareOutlined/>}
                                                    type="dashed"
                                                    danger
                                                >Удалить</Button>
                                            </div>))
                                    }
                                    <Button
                                        onClick={() => push('')}
                                        icon={<PlusSquareOutlined/>}
                                        type="dashed"
                                    >Добавить автора</Button>
                                </div>
                            )}
                        </FieldArray>
                    </Form.Item>
                    <Form.Item
                        label="Год издания"
                        validateStatus={publishingYearWarning && 'warning'}
                        help={
                            publishingYearWarning &&
                            'Указанный год издания выглядит подозрительно, проверьте правильность ввода.'
                        }
                        hasFeedback
                    >
                        <Input
                            name="publishingYear"
                            value={values.publishingYear}
                            onChange={handleChange}
                            onBlur={(e) => {
                                if (e.currentTarget.value < 1800) {
                                    setPublishingYearWarning(true)
                                } else setPublishingYearWarning(false)
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="ISBN"
                        validateStatus={validateErrors.isbn && 'error'}
                        help={validateErrors.isbn}
                    >
                        <Input
                            name="isbn"
                            value={values.isbn}
                            placeholder="Например, 978-5-93286-208-7"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={styles.buttonsContainer}>
                            <Button onClick={() => window.history.back()}>Отменить</Button>
                            <Button
                                htmlType="submit"
                                onClick={() => {
                                    validateForm().then((errors) => setValidateErrors(errors))
                                    handleSubmit()
                                }}
                                type="primary"
                            >{submitButtonText}</Button>
                        </div>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    )
}

export default BookForm
