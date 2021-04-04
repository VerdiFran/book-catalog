import React, {useState} from 'react'
import {Formik} from 'formik'
import {Button, Form, Input, Typography} from 'antd'
import styles from './Registration.module.scss'
import * as Yup from 'yup'

/**
 * Component with register form
 * @returns {JSX.Element}
 * @constructor
 */
const Registration = ({register}) => {
    const {Title} = Typography

    const RegistrationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Неправильный email.')
            .required('Это поле обязательно для заполнения.'),
        password: Yup.string()
            .required('Это поле обязательно для заполнения.')
            .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы и цифры.'),
        passwordConfirmation: Yup.string()
            .required('Это поле обязательно для заполнения.')
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать.')
    })

    const [passwordIsConfirmed, setPasswordIsConfirmed] = useState(false)
    const [validateErrors, setValidateErrors] = useState({})

    const passwordFieldsNotIsEmpty = (values) =>
        values.password.length > 0 && values.passwordConfirmation.length > 0

    return (
        <div>
            <Title level={4}>Регистрация</Title>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                }}
                validationSchema={RegistrationSchema}
                onSubmit={(values) => register(values.email, values.password)}
            >
                {({
                      values,
                      handleSubmit,
                      handleChange,
                      setFieldValue,
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
                                    onChange={(e) => {
                                        setFieldValue('password', e.currentTarget.value)
                                        setPasswordIsConfirmed(
                                            passwordFieldsNotIsEmpty(values) &&
                                            values.passwordConfirmation === e.currentTarget.value
                                        )
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Подтверждение пароля"
                                hasFeedback
                                validateStatus={passwordIsConfirmed
                                    ? 'success'
                                    : validateErrors.passwordConfirmation ? 'error' : null}
                                help={validateErrors.passwordConfirmation}
                            >
                                <Input.Password
                                    name="passwordConfirmation"
                                    value={values.passwordConfirmation}
                                    onChange={(e) => {
                                        setFieldValue('passwordConfirmation', e.currentTarget.value)
                                        setPasswordIsConfirmed(
                                            passwordFieldsNotIsEmpty(values) &&
                                            values.password === e.currentTarget.value
                                        )
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className={styles.buttonContainer}>
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        onClick={() => {
                                            validateForm()
                                                .then((errors) => setValidateErrors(errors))
                                            handleSubmit()
                                        }}
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
