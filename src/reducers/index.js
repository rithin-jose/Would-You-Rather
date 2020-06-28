import {combineReducers} from 'redux'
import users from './users'
import autheduser from './authedeuser'
import questions from './questions'


export default combineReducers({
    users,
    autheduser,
    questions,
})