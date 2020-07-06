export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}