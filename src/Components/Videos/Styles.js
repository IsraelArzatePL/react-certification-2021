import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Grid = styled(motion.div)`
    width: 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(400px, 1fr));
    gap: 16px;
`

export const SpanError = styled(motion.span)`
    display: block;
    width: 100%;
    padding: 2rem;
    text-align: center;
    background-color: #ce6363;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
`

export const StyledMainVideo = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const StyledVideo = styled(Link)`
    width: 100%;
    display: block;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    overflow: hidden;
    transition: 0.16s ease-out;
    picture {
        display: block;
        width: 100%;
        img {
            display: block;
            width: 100%;
        }
    }
    > div {
        width: 100%;
        padding: 16px;
        h6 {
            font-weight: 900;
            font-size: 1rem;
            margin-bottom: 8px;
            text-align: justify;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        p {
            text-align: justify;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    &:hover {
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.16), 0 0 1rem rgba(0, 0, 0, 0.16);
    }
`