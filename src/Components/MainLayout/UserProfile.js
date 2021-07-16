import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledUser } from './Styles'

const UserProfile = () => {
    return (
        <StyledUser>
            <FontAwesomeIcon icon={faUser}/>
        </StyledUser>
    )
}
export default UserProfile