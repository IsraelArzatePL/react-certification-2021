import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthProvider'
import { LoginMainContainer, Form, Legend, InputContainer, Input, ButtonContainer, SubmitBtn, BtnLoader, ErrorMsg } from './Styles'
import { useForm } from 'react-hook-form'
import { pageVariants, pageTransitions } from '../../Animations/PageTransition'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const { spinner, logged, toggleLogged, toggleSpinner, deactiveSpinner } = useAuth()
    const [errorMsg, setErrorMsg] = useState(false)

    const handleLogin = e => {
        toggleSpinner()
        if (e.name === 'wizeline' && e.password === 'Rocks!') {
            toggleLogged()
        } else {
            deactiveSpinner()
            setTimeout(() => setErrorMsg(true), 750)
        }
    }

    return ( !logged ?
        <LoginMainContainer exit="out" animate="in" initial="out" variants={ pageVariants } transition={ pageTransitions }>
            <Form onSubmit={ handleSubmit(handleLogin) }>
                <Legend>Login</Legend>
                <InputContainer>
                    <Input type="text" {...register('name')} placeholder="wizeline"/>
                </InputContainer>
                <InputContainer>
                    <Input type="password" {...register('password')} placeholder="Rocks!"/>
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