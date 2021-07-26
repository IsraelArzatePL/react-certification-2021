import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledUserSpan } from './Styles'

const UserProfile = () => {
    return (
        <StyledUserSpan exact to="/login">
            <FontAwesomeIcon icon={faUser}/>
        </StyledUserSpan>
    )
}
export default UserProfile