import React from 'react'
import { StyledUserLogged, Picture, UserBtnLogout, BtnLoader } from './Styles'
import avatar from './avatar.jpg'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../Providers/AuthProvider'

const UserLogged = () => {
    const { toggleLogged, spinner, deactiveSpinner } = useAuth();
    const handleLogged = () => {
        deactiveSpinner()
        toggleLogged()
    }

    return (
        <StyledUserLogged>
            <Picture>
                <img src={ avatar } alt="Avatar" />
            </Picture>
            <UserBtnLogout type="button" onClick={ handleLogged }>
                { spinner ? <FontAwesomeIcon icon={ faPowerOff }/> : <BtnLoader/>}
            </UserBtnLogout>
        </StyledUserLogged>
    )
}
export default UserLogged