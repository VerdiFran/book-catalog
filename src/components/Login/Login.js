import React, {useState} from 'react'
import {Formik} from 'formik'
import {Button, Form, Input, Typography} from 'antd'
import styles from './Login.module.scss'
import * as Yup from 'yup'

/**
 * Component with auth form
 * @returns {JSX.Element}
 * @constructor
 */
const Login = ({login}) => {
    const {Title} = Typography

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Неправильный email').required('Это поле обязательно для заполнения'),
        password: Yup.string().required('Это поле обязательно для заполнения')
    })

    const [validateErrors, setValidateErrors] = useState({})

    return (
        <div>
            <Title level={4}>Вход</Title>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => login(values.email, values.password)}
            >
                {({
                      values,
                      handleSubmit,
                      handleChange,
                      validateForm
                  }) => (
                    <div className={styles.formContainer}>
                        <Form layout="vertical">
                            <Form.Item
                                label="Email"
                                validateStatus={validateErrors.email && 'error'}
                                help={validateErrors.email}
                                hasFeedback
                            >
                                <Input
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Пароль"
                                validateStatus={validateErrors.password && 'error'}
                                help={validateErrors.password}
                                hasFeedback
                            >
                                <Input.Password
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className={styles.buttonContainer}>
                                    <Button
                                        htmlType="submit"
                                        onClick={() => {
                                            validateForm()
                                                .then((errors) => setValidateErrors(errors))
                                            handleSubmit()
                                        }}
                                        type="primary"
                                    >Войти</Button>
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
