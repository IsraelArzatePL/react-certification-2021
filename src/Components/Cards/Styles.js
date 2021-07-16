import styled from 'styled-components'

export const StyledCardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const StyledCard = styled.div`
    flex: 0 1 calc(25% - 12px);
    background-color: #fff;
    border-radius: 4px;
    margin-top: 16px;
    overflow: hidden;
    &:nth-of-type(-n+4) {
        margin-top: 0;
    }
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