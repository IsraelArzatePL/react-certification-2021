import React from 'react'
import { StyledNavigation, StyledTitle } from './Styles'
import Searcher from './Searcher'
import UserProfile from './UserProfile'

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledTitle>YouTube API</StyledTitle>
            <Searcher/>
            <UserProfile/>
        </StyledNavigation>
    )
}
export default Navigation