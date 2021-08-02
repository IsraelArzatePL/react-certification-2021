import React from 'react'
import { StyledCard } from './Styles'

const Card = ({ image, title, desc }) => {
    return (
        <StyledCard to="/detail">
            <header>
                <img src={ image } alt=""/>
            </header>
            <section>
                <h1>{ title ? title : 'Without Title' }</h1>
                <p>{ desc }</p>
            </section>
        </StyledCard>
    )
}
export default Card