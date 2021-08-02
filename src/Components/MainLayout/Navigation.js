import React from 'react'
import { StyledNavigation, StyledTitle } from './Styles'
import Searcher from './Searcher'
import UserProfile from './UserProfile'
import { useAuth } from '../../Providers/AuthProvider'
import UserLogged from './UserLogged'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const { logged } = useAuth()

    return (
        <StyledNavigation>
            <StyledTitle to="/">
                <FontAwesomeIcon icon={ faHome }/>
            </StyledTitle>
            <Searcher/>
            { logged ? <UserLogged/> : <UserProfile/> }
        </StyledNavigation>
    )
}
export default Navigation