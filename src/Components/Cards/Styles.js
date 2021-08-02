import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledCardsContainer = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 4fr));
    gap: 16px;

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const StyledCard = styled(motion(Link))`
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    text-decoration: none;
    color: #000;
    header {
        width: 100%;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.16);
        overflow: hidden;
        img {
            width: 100%;
            display: block;
            object-fit: cover;
        }
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