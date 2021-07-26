import React from 'react'
import { useAuth } from '../../Providers/AuthProvider'
import { LoginMainContainer, Form, Legend, InputContainer, Input, ButtonContainer, SubmitBtn } from './Styles'
import { useForm } from './useForm'

const Login = () => {
    const textField = useForm()
    const passwordField = useForm()
    const { toggleLogged } = useAuth()

    const handleLogin = e => {
        e.preventDefault()
        if (textField.value === 'wizeline' && passwordField.value === 'Rocks!') {
            toggleLogged()
        } else {
            console.log('Bad credentials')
        }
    }

    return (
        <LoginMainContainer>
            <Form onSubmit={ handleLogin }>
                <Legend>Login</Legend>
                <InputContainer>
                    <Input type="text" id="textField" {...textField} placeholder="example@example.com"/>
                </InputContainer>
                <InputContainer>
                    <Input type="password" id="passwordField" {...passwordField} placeholder="Password"/>
                </InputContainer>
                <ButtonContainer>
                    <SubmitBtn type="submit">Login</SubmitBtn>
                </ButtonContainer>
            </Form>
        </LoginMainContainer>
    )
}
export default Login