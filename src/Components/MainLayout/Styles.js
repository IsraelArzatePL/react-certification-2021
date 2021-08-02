import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const StyledNavigation = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.32);

    @media screen and (max-width: 1080px) {
        padding: 0 1rem;
        gap: 0 8px;
    }
`

export const StyledContainer = styled.main`
    width: 100%;
    padding: 2rem;

    @media screen and (max-width: 1080px) {
        padding: 1rem;
    }
`

export const StyledTitle = styled(Link)`
    display: inline-block;
    width: auto;
    font-weight: 900;
    margin-right: 1rem;
    font-size: 24px;
    color: #000;
`

export const StyledSearcherForm = styled.form`
    width: auto;
    display: inline-flex;

    @media screen and (max-width: 1080px) {
        width: 75%;
    }
`

export const SearcherInput = styled.input`
    border: none;
    background-color: #f5f5f5;
    padding: 0 1rem;
    min-width: 360px;
    height: 40px;
    border-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    &::placeholder {
        font-weight: 300;
        color: rgba(0, 0, 0, 0.64);
    }

    @media screen and (max-width: 1080px) {
        min-width: auto;
        width: 100%;
    }
`
export const SearcherButton = styled.button`
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.64);
    border: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 0;
    cursor: pointer;
    transition: all 0.16s ease-out;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

export const StyledUserBtnLogin = styled(Link)`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.64);
    border: 0;
    cursor: pointer;
`

export const StyledUserLogged = styled.div`
    margin-left: auto;
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0 8px;
`

export const Picture = styled.picture`
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
    }
`

export const UserBtnLogout = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #c5c5c5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.64);
`

const spinner = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

export const BtnLoader = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.64);
    border-left-color: #86BEDA;
    animation: ${spinner} 1s linear infinite;
`