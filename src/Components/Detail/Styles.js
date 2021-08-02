import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledDetailContainer = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 600px;
    gap: 0 16px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 16px 0;
    }
`

export const StyledDetail = styled.div`
    width: 100%;
    height: 750px;
    background-color: rgba(0, 0, 0, 0.36);
    img {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        height: 450px;
    }

    @media screen and (max-width: 550px) {
        height: 250px;
    }
`

export const DetailList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
`

export const DetailItem = styled(Link)`
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: #000;
    picture {
        display: inline-block;
        width: 150px;
        height: 150px;
        background-color: rgba(0, 0, 0, 0.36);
    }
    > div {
        padding: 1rem;
        span {
            display: block;
            width: 100%;
            margin-bottom: 8px;
            font-size: 24px;
            font-weight: 900;
        }
        p {
            font-weight: 300;
        }
    }
`