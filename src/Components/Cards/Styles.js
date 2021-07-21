import styled from 'styled-components'

export const StyledCardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 4fr));
    gap: 16px;
`

export const StyledCard = styled.div`
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    header {
        width: 100%;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.16);
    }
    section {
        padding: 1rem;
        h1 {
            font-size: 24px;
            margin-bottom: 16px;
        }
        p {
            font-weight: 300;
            font-size: 1rem;
        }
    }
`