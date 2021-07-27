import React, { createContext, useState } from "react"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [logged, setLogged] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const toggleLogged = () => sleep(2000).then(() => setLogged(!logged))
    const toggleSpinner = () => setSpinner(!spinner)
    const deactiveSpinner = () => sleep(750).then(() => setSpinner(false))

    const authContextValue = {
        logged,
        spinner,
        toggleLogged,
        toggleSpinner,
        deactiveSpinner
    }

    return <AuthContext.Provider value={authContextValue} {...props} />
};

export const useAuth = () => React.useContext(AuthContext)
export default AuthProvider
