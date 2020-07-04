import {receiveUsers} from './users'
import {receiveQuestion, addQuestions} from './questions'
import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
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

export function handleSaveQuestion(optionOneText,optionTwoText){
    return (dispatch,getState) => {
        const {autheduser} = getState()
        return _saveQuestion({
            author: autheduser.currentUser,
            optionOneText,
            optionTwoText
        })
        .then((questions) => dispatch(addQuestions(questions)))
        .then((questions) => dispatch(receiveQuestion(questions)))
        
    }
}

