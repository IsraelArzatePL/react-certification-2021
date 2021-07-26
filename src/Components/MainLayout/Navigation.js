import React from 'react'
import { StyledNavigation, StyledTitle } from './Styles'
import Searcher from './Searcher'
import UserProfile from './UserProfile'
import { useAuth } from '../../Providers/AuthProvider'

const Navigation = () => {
    const { logged } = useAuth()

    return (
        <StyledNavigation>
            <StyledTitle>YouTube API</StyledTitle>
            <Searcher/>
            { logged ? 'logged' : <UserProfile/> }
        </StyledNavigation>
    )
}
export default Navigation