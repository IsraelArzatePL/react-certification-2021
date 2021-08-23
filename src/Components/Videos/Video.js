import React from 'react'
import { StyledVideo } from './Styles'

const Video = ({ image, title, desc }) => {
    return(
        <StyledVideo to="/">
            <picture>
                <img src={image} alt={title}/>
            </picture>
            <div>
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>
        </StyledVideo>
    )
}
export default Video