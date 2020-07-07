import {combineReducers} from 'redux'
import users from './users'
import autheduser from './autheduser'
import questions from './questions'

export default combineReducers({
    users,
    questions,
    autheduser
})