import React from 'react'
import { StyledUserLogged, Picture } from './Styles'

const UserLogged = () => {
    return (
        <StyledUserLogged>
            <Picture>
                <img src="../../../public/avatar.jpg" alt="Avatar" />
            </Picture>
        </StyledUserLogged>
    )
}
export default UserLogged