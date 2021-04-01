import React from 'react'
import {Formik} from 'formik'
import {Button, Form, Input} from 'antd'

/**
 * Component with register form
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = ({message, register}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordIsConfirmed: false
                }}
                onSubmit={(values) => {register(values.email, values.password)}}
            >
                {({values, handleSubmit, handleChange, setFieldValue}) => (
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
                        <Form.Item label="Подтверждение пароля">
                            <Input.Password
                                onChange={(e) => setFieldValue(
                                        'passwordIsConfirmed',
                                        values.password === e.currentTarget.value
                                    )}
                            />
                        </Form.Item>
                        {
                            values.passwordIsConfirmed && <div>Password is confirmed</div>
                        }
                        <div>{message}</div>
                        <Form.Item>
                            <Button htmlType="submit" onClick={handleSubmit}>Зарегестрироваться</Button>
                        </Form.Item>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Registration
