export const ACTIONS = {
    /* Login Actions */
    UPDATE_LOGGED: 'update_logged',
    UPDATE_SPINNER: 'update_spinner',
    /* API Actions */
    UPDATE_QUERY: 'update_query',
    UPDATE_LIST: 'update_list',
    UPDATE_VIDEO: 'update_video'
}

const ACTION_REDUCERS = {
    /* Login Actions */
    [ACTIONS.UPDATE_LOGGED]: (state, action) => ({
        ...state,
        logged: action.payload
    }),
    [ACTIONS.UPDATE_SPINNER]: (state, action) => ({
        ...state,
        spinner: action.payload
    }),
    /* API Actions */
    [ACTIONS.UPDATE_QUERY]: (state, actions) => ({
        ...state,
        query: actions.payload
    }),
    [ACTIONS.UPDATE_LIST]: (state, actions) => ({
        ...state,
        list: actions.payload
    }),
    [ACTIONS.UPDATE_VIDEO]: (state, actions) => ({
        ...state,
        video: actions.payload
    })
}

export const reducer = (state, action) => {
    const actionReducer = ACTION_REDUCERS[action.type]
    return actionReducer ? actionReducer(state, action) : state
}