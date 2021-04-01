import React from 'react'
import {FieldArray, Formik} from 'formik'
import {Button, Form, Input} from 'antd'

const NewBookForm = ({addBookToCatalog}) => {
    return (
        <Formik
            initialValues={{
                title: '',
                authors: [''],
                publishingYear: null,
                isbn: ''
            }}
            onSubmit={(values) => {
                addBookToCatalog(values.title, values.authors, values.publishingYear, values.isbn)
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
                        <Button htmlType="submit" onClick={handleSubmit}>Добавить</Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    )
}

export default NewBookForm
