import styled, { keyframes } from 'styled-components'

export const StyledLoader = styled.div`
    width: 100%;
    height: 100vh;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    &.hidden {
        display: none;
    }
`

const spinner = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

export const Spinner = styled.span`
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 5px solid rgba(0, 0, 0, 0.64);
    border-left-color: #86BEDA;
    animation: ${spinner} 1s linear infinite;
`