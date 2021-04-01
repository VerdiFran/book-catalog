import React from 'react'
import {Button, Form, Input} from 'antd'
import {FieldArray, Formik} from 'formik'

const BookForm = ({initialValues, submitButtonText, handleSubmit}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >
            {({values, handleSubmit, handleChange}) => (
                <Form>
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
                                        values.authors.map((author, index) => <div key={index}>
                                            <Input
                                                value={author}
                                                name={`authors.${index}`}
                                                onChange={handleChange}
                                            />
                                            <Button onClick={() => remove(index)}>Удалить</Button>
                                        </div>)
                                    }
                                    <Button onClick={() => push('')}>+</Button>
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
                        <Button htmlType="submit" onClick={handleSubmit}>{submitButtonText}</Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    )
}

export default BookForm
