import React from 'react'
import {Formik} from 'formik'
import {Button, Form, Input} from 'antd'

/**
 * Component with auth form
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                onSubmit={(values) => {alert(JSON.stringify(values, null, 2))}}
            >
                <Form layout="horizontal">
                    <Form.Item label="Логин">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Пароль">
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Войти</Button>
                    </Form.Item>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
