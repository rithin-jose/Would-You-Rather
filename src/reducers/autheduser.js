import {SET_AUTHED_USERS , REMOVE_AUTHED_USERS} from '../actions/autheduser'

export default function autheduser(state=null,action){
    switch(action.type){
        case SET_AUTHED_USERS:
            return action.id
        case REMOVE_AUTHED_USERS:
            return null
        default:
            return state
    }
}