import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        width: 100%;
        background-color: #f5f5f5;
    }
`

export default GlobalStyles