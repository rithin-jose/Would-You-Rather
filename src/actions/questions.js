export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTION = 'RECIEVE_QUESTION'

export function receiveQuestion(questions){
    return{
        type: RECEIVE_QUESTION,
        questions,
    }
}



export function addQuestions(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}