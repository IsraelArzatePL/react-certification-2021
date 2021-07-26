import React, { createContext, useState } from "react"

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [logged, setLogged] = useState(false)

    const toggleLogged = () => sleep(2000).then(() => setLogged(!logged))

    const authContextValue = {
        logged,
        toggleLogged,
    }

    return <AuthContext.Provider value={authContextValue} {...props} />
};

export const useAuth = () => React.useContext(AuthContext)
export default AuthProvider
