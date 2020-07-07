export const SET_AUTHED_USERS = 'SET_AUTHED_USERS'
export const REMOVE_AUTHED_USERS = 'REMOVE_AUTHED_USERS'

export function setAuthedUser(id){
    return{
        type: SET_AUTHED_USERS,
        id,
    }
}

export function removeAuthedUser(id){
    return{
        type: REMOVE_AUTHED_USERS,
        id,
    }
}