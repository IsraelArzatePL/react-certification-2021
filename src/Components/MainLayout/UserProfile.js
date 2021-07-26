import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledUserSpan } from './Styles'
import { useAuth } from '../../Providers/AuthProvider'

const UserProfile = () => {
    const isLogged = useAuth();
    const handleAuth = () => {
        console.log(isLogged)
    }

    return (
        <StyledUserSpan onClick={ handleAuth }>
            <FontAwesomeIcon icon={faUser}/>
        </StyledUserSpan>
    )
}
export default UserProfile