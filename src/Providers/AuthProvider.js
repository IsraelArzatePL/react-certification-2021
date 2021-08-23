import React, { createContext, useContext, useReducer } from "react"
import { ACTIONS, reducer } from './reducers'

const AuthContext = createContext({
    logged: false,
    spinner: false,
    toggleLogged: () => null,
    toggleSpinner: () => null,
    deactiveSpinner: () => null
})

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        logged: false,
        spinner: false
    })

    const { logged, spinner } = state

    const toggleLogged = () => setTimeout(() => dispatch({ type: ACTIONS.UPDATE_LOGGED, payload: true }), 750)
    const toggleSpinner = () => dispatch({ type: ACTIONS.UPDATE_SPINNER, payload: true })
    const deactiveSpinner = () => setTimeout(() => dispatch({ type: ACTIONS.UPDATE_SPINNER, payload: false }), 750)

    const authContextValue = {
        logged,
        spinner,
        toggleLogged,
        toggleSpinner,
        deactiveSpinner
    }

    return <AuthContext.Provider value={authContextValue} {...props} />
}
export const useAuth = () => useContext(AuthContext)
export default AuthProvider