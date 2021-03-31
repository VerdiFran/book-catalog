import React from 'react'
import {Formik} from 'formik'
import {Button, Form, Input} from 'antd'

/**
 * Component with register form
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    passwordIsConfirmed: false
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
                    <Form.Item label="Подтверждение пароля">
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Зарегестрироваться</Button>
                    </Form.Item>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration
