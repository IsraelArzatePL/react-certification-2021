import React, { createContext, useState, useContext } from "react"
import { Sleeper } from '../Props/Sleeper'

const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [logged, setLogged] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const toggleLogged = () => Sleeper(2000).then(() => setLogged(!logged))
    const toggleSpinner = () => setSpinner(!spinner)
    const deactiveSpinner = () => Sleeper(750).then(() => setSpinner(false))

    const authContextValue = {
        logged,
        spinner,
        toggleLogged,
        toggleSpinner,
        deactiveSpinner
    }

    return <AuthContext.Provider value={authContextValue} {...props} />
};

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
