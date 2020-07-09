import {_saveQuestion,_saveQuestionAnswer} from '../utils/_DATA'
import {handleInitialData} from './shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestions(question){
    return{
        type: ADD_QUESTIONS,
        question,
    }
}



export function handleAddQuestion(optionOneText,optionTwoText){
    return (dispatch,getState) => {
        const {autheduser} =  getState()

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: autheduser,
        })
        .then((question)=>dispatch(addQuestions(question)))
    }
}

export function handleAddAnswer(id,answerOption){
    return (dispatch,getState) => {
        const {autheduser,questions} =  getState()

        return _saveQuestionAnswer({
            authedUser:autheduser,
            qid:id,
            answer:answerOption,
        })
        .then(() => dispatch(handleInitialData()))
    }
}