import React from 'react'
import { StyledUserLogged, Picture, UserBtnLogout } from './Styles'
import avatar from './avatar.jpg'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../Providers/AuthProvider'

const UserLogged = () => {
    const { toggleLogged } = useAuth();
    const handleLogged = () => toggleLogged()

    return (
        <StyledUserLogged>
            <Picture>
                <img src={ avatar } alt="Avatar" />
            </Picture>
            <UserBtnLogout type="button" onClick={ handleLogged }>
                <FontAwesomeIcon icon={ faPowerOff }/>
            </UserBtnLogout>
        </StyledUserLogged>
    )
}
export default UserLogged