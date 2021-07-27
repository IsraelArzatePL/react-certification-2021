import React from 'react'
import Navigation from './Navigation'
import Container from './Container'
import AuthProvider from '../../Providers/AuthProvider'

const MainLayout = () => {
    return (
        <AuthProvider>
            <Navigation />
            <Container />
        </AuthProvider>
    )
}
export default MainLayout