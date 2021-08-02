import React from 'react'
import Card from './Card'
import { StyledCardsContainer } from './Styles'
import { pageVariants, pageTransitions } from '../../Animations/PageTransition'
import { useApi } from '../../Providers/ApiProvider'

const CardsContainer = () => {
    const { photos } = useApi()

    return (
        <StyledCardsContainer exit="out" animate="in" initial="out" variants={ pageVariants } transition={ pageTransitions }>
            { photos && photos.map(photo => (
                <Card image={ photo.urls.small } title={ photo.alt_description } desc={ photo.description } key={ photo.id }/>
            ))}
        </StyledCardsContainer>
    )
}
export default CardsContainer