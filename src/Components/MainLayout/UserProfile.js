import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledUserBtnLogin } from './Styles'

const UserProfile = () => {
    return (
        <StyledUserBtnLogin to="/login">
            <FontAwesomeIcon icon={faUser}/>
        </StyledUserBtnLogin>
    )
}
export default UserProfile