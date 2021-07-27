import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthProvider'
import { LoginMainContainer, Form, Legend, InputContainer, Input, ButtonContainer, SubmitBtn, BtnLoader, ErrorMsg } from './Styles'
import { useForm } from './useForm'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Login = () => {
    const textField = useForm()
    const passwordField = useForm()
    const { spinner, logged, toggleLogged, toggleSpinner, deactiveSpinner } = useAuth()
    const [errorMsg, setErrorMsg] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        toggleSpinner()
        if (textField.value === 'wizeline' && passwordField.value === 'Rocks!') {
            toggleLogged()
        } else {
            deactiveSpinner()
            sleep(750).then(() => setErrorMsg(true))
        }
    }

    return ( !logged ?
        <LoginMainContainer>
            <Form onSubmit={ handleLogin }>
                <Legend>Login</Legend>
                <InputContainer>
                    <Input type="text" id="textField" {...textField} placeholder="wizeline"/>
                </InputContainer>
                <InputContainer>
                    <Input type="password" id="passwordField" {...passwordField} placeholder="Rocks!"/>
                </InputContainer>
                { errorMsg ? <ErrorMsg>Use <strong>wizeline</strong> as a user and <strong>Rocks!</strong> as password!</ErrorMsg> : null }
                <ButtonContainer>
                    <SubmitBtn type="submit">{ !spinner ? 'Login' : <BtnLoader/> }</SubmitBtn>
                </ButtonContainer>
            </Form>
        </LoginMainContainer> : <Redirect to="/" />
    )
}
export default Login