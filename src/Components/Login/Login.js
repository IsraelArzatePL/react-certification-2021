import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthProvider'
import { LoginMainContainer, Form, Legend, InputContainer, Input, ButtonContainer, SubmitBtn, BtnLoader } from './Styles'
import { useForm } from './useForm'

const Login = () => {
    const textField = useForm()
    const passwordField = useForm()
    const { toggleLogged, toggleLoader, logged, loader } = useAuth()

    const handleLogin = e => {
        e.preventDefault()
        toggleLoader()
        if (textField.value === 'wizeline' && passwordField.value === 'Rocks!') {
            toggleLogged()
        } else {
            console.log('Bad credentials')
        }
    }

    return ( !logged ?
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
                    <SubmitBtn type="submit">{ !loader ? 'Login' : <BtnLoader/> }</SubmitBtn>
                </ButtonContainer>
            </Form>
        </LoginMainContainer> : <Redirect to="/" />
    )
}
export default Login