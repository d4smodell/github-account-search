export const SEARCH_USERS = 'SEARCH_USERS'
export const GET_REPOS = 'GET_REPOS'
export const GET_USER = 'GET_USER'
export const SET_LOADING = 'SET_LOADING'
export const CLEAR_USERS = 'CLEAR_USERS'

export const githubReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_USERS: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case GET_REPOS: {
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case CLEAR_USERS: {
            return {
                ...state,
                users: []
            }
        }
        default: return state
    }
}