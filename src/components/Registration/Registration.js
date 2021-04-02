import React from 'react'
import {Formik} from 'formik'
import {Alert, Button, Form, Input, Typography} from 'antd'
import styles from './Registration.module.scss'

/**
 * Component with register form
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = ({register}) => {
    const {Title} = Typography

    const passwordFieldsNotIsEmpty = (values) => values.password.length > 0 && values.confPassword.length > 0

    return (
        <div>
            <Title level={4}>Регистрация</Title>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confPassword: '',
                    passwordIsConfirmed: false
                }}
                onSubmit={(values) => {
                    register(values.email, values.password)
                }}
            >
                {({values, handleSubmit, handleChange, setFieldValue}) => (
                    <div className={styles.formContainer}>
                        <Form layout="vertical">
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
                                    onChange={(e) => {
                                        setFieldValue('password', e.currentTarget.value)
                                        setFieldValue(
                                            'passwordIsConfirmed',
                                            passwordFieldsNotIsEmpty(values) &&
                                            values.confPassword === e.currentTarget.value
                                        )
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label="Подтверждение пароля">
                                <Input.Password
                                    onChange={(e) => {
                                        setFieldValue('confPassword', e.currentTarget.value)
                                        setFieldValue(
                                            'passwordIsConfirmed',
                                            passwordFieldsNotIsEmpty(values) &&
                                            values.password === e.currentTarget.value
                                        )
                                    }}
                                />
                            </Form.Item>
                            {
                                values.passwordIsConfirmed && <Form.Item>
                                    <Alert message="Пароль подтвержден." type="success" showIcon/>
                                </Form.Item>
                            }
                            {/*<div>{message}</div>*/}
                            {/*{
                                messageText.length > 0 && message.error(messageText)
                            }*/}
                            <Form.Item>
                                <div className={styles.buttonContainer}>
                                    <Button
                                        htmlType="submit"
                                        onClick={handleSubmit}
                                        type="primary"
                                    >Зарегестрироваться</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Registration
