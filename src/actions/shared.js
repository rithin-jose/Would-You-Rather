import {receiveUsers} from './users'
import {receiveQuestion} from './questions'
import {
    _getUsers,
    _getQuestions
} from '../utils/_DATA'

export function handleUserData(){
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function handleQuestionData(){
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestion(questions))
            })
    }
}