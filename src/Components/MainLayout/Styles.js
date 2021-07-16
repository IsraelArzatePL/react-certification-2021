import styled from 'styled-components'

export const StyledNavigation = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.32);
`

export const StyledContainer = styled.main`
    width: 100%;
    padding: 2rem;
`

export const StyledTitle = styled.h1`
    display: inline-block;
    width: auto;
    font-weight: 900;
    margin-right: 1rem;
`

export const StyledSearcher = styled.form`
    width: auto;
    display: inline-flex;
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

export const StyledUser = styled.span`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.64);
`