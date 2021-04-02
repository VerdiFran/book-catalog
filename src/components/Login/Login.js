import React from 'react'
import {Formik} from 'formik'
import {Button, Form, Input, Typography} from 'antd'
import styles from './Login.module.scss'

/**
 * Component with auth form
 * @returns {JSX.Element}
 * @constructor
 */
const Login = ({login}) => {
    const {Title} = Typography

    return (
        <div>
            <Title level={4}>Вход</Title>
            <Formik
                initialValues={{
                    email: 'ttt@mail.ru',
                    password: 'password123'
                }}
                onSubmit={(values) => login(values.email, values.password)}
            >
                {({values, handleSubmit, handleChange}) => (
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
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className={styles.buttonContainer}>
                                    <Button htmlType="submit" onClick={handleSubmit} type="primary">Войти</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Login
