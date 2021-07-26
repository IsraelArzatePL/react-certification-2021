import styled from 'styled-components'

export const LoginMainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Form = styled.form`
    width: 500px;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.32);
    background-color: #fff;
`

export const Legend = styled.legend`
    display: block;
    width: 100%;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 300;
`

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 16px;
    &:last-of-type {
        margin-bottom: 0;
    }
`

export const ButtonContainer = styled(InputContainer)`
    display: flex;
    justify-content: flex-end;
`

export const Input = styled.input`
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 3px;
    padding: 16px;
    border: none;
    font-weight: 300;
`

export const SubmitBtn = styled.button`
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 32px;
    font-weight: 300;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
`