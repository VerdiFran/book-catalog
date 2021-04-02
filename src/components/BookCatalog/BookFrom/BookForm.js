import React from 'react'
import {Button, Form, Input} from 'antd'
import {MinusSquareOutlined, PlusSquareOutlined} from '@ant-design/icons'
import {FieldArray, Formik} from 'formik'
import styles from './BookForm.module.scss'

const BookForm = ({initialValues, submitButtonText, handleSubmit}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >
            {({values, handleSubmit, handleChange}) => (
                <Form layout="vertical">
                    <Form.Item label="Название">
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
                    <Form.Item label="Год издания">
                        <Input
                            name="publishingYear"
                            value={values.publishingYear}
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="ISBN">
                        <Input
                            name="isbn"
                            value={values.isbn}
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={styles.buttonsContainer}>
                            <Button onClick={() => window.history.back()}>Отменить</Button>
                            <Button htmlType="submit" onClick={handleSubmit} type="primary">{submitButtonText}</Button>
                        </div>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    )
}

export default BookForm
