import {RECEIVE_QUESTION} from '../actions/questions'

export default function users (state= [],action){
    switch(action.type){
        case RECEIVE_QUESTION:
            return{
                ...state,
                ...action.questions
            }
        default: 
            return state
    }
}