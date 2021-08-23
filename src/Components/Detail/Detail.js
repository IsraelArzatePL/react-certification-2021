import React from 'react'
import { StyledDetailContainer, StyledDetail, DetailList, DetailItem } from './Styles'
import { pageVariants, pageTransitions } from '../../Animations/PageTransition'

const Detail = ({ image }) => {
    return (
        <StyledDetailContainer exit="out" animate="in" initial="out" variants={ pageVariants } transition={ pageTransitions }>
            <StyledDetail>
                <img src={ image } alt="" />
            </StyledDetail>
            <DetailList>
                <DetailItem>
                    <picture></picture>
                    <div>
                        <span>Title</span>
                        <p>Desc</p>
                    </div>
                </DetailItem>
                <DetailItem>
                    <picture></picture>
                    <div>
                        <span>Title</span>
                        <p>Desc</p>
                    </div>
                </DetailItem>
                <DetailItem>
                    <picture></picture>
                    <div>
                        <span>Title</span>
                        <p>Desc</p>
                    </div>
                </DetailItem>
                <DetailItem>
                    <picture></picture>
                    <div>
                        <span>Title</span>
                        <p>Desc</p>
                    </div>
                </DetailItem>
                <DetailItem>
                    <picture></picture>
                    <div>
                        <span>Title</span>
                        <p>Desc</p>
                    </div>
                </DetailItem>
            </DetailList>
        </StyledDetailContainer>
    )
}
export default Detail