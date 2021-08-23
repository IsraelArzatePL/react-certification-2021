import React, { createContext, useContext, useReducer } from 'react'
import { ACTIONS, reducer } from './reducers'

const YouTubeContext = createContext({
    list: [],
    video: {},
    query: '',
    spinner: true,
    handleQuery: () => null,
    handleSpinner: () => null,
    handleList: () => null
})

const YouTubeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        list: [],
        query: 'pokemon',
        spinner: true
    })

    const handleQuery = value => dispatch({ type: ACTIONS.UPDATE_QUERY, payload: value })
    const handleSpinner = value => dispatch({ type: ACTIONS.UPDATE_SPINNER, payload: value })
    const handleList = list => dispatch({ type: ACTIONS.UPDATE_LIST, payload: list })

    const { list, video, query, spinner } = state

    const context = { list, video, query, spinner, handleQuery, handleSpinner, handleList }

    return <YouTubeContext.Provider value={context} {...props} />
}
export const useYouTube = () => useContext(YouTubeContext)
export default YouTubeProvider