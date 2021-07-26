import React from 'react'
import { StyledNavigation, StyledTitle } from './Styles'
import Searcher from './Searcher'
import UserProfile from './UserProfile'
import { useAuth } from '../../Providers/AuthProvider'
import UserLogged from './UserLogged'

const Navigation = () => {
    const { logged } = useAuth()

    return (
        <StyledNavigation>
            <StyledTitle>YouTube API</StyledTitle>
            <Searcher/>
            { logged ? <UserLogged/> : <UserProfile/> }
        </StyledNavigation>
    )
}
export default Navigation