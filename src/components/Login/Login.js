import React from 'react'
import {Formik} from 'formik'
import {Button, Form, Input} from 'antd'

/**
 * Component with auth form
 * @returns {JSX.Element}
 * @constructor
 */
const Login = ({login}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: 'ttt@mail.ru',
                    password: 'password123'
                }}
                onSubmit={(values) => {
                    login(values.email, values.password)
                }}
            >
                {({values, handleSubmit, handleChange}) => (
                    <Form layout="horizontal">
                        <Form.Item label="Email">
                            <Input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item label="Пароль">
                            <Input.Password
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" onClick={handleSubmit}>Войти</Button>
                        </Form.Item>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
