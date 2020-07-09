import React,{Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component{
    state = {
        showMyQuestion : false
    }

    unanswered = () => {
        this.setState({
            showMyQuestion: false
        })
    }

    answered = () => {
        this.setState({
            showMyQuestion: true
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col s1 m3"></div>
                    <div className="center col s10 m6">
                        <ul className="tabs">
                            <button className="tab col s6" onClick={this.unanswered}><a >Unanswered Questions</a></button>
                            <button className="tab col s6" onClick={this.answered}><a>Answered Questions</a></button>
                        </ul>
                        {
                            this.state.showMyQuestion
                            ?this.props.AnsweredId.map((id)=> (
                                <Question key={id} id={id}/>  
                            ))
                            : this.props.QuestionId.map((id)=> (
                                <Question key={id} id={id}/>  
                            ))
                        }     
                    </div>
                <div className="col s1 m6"></div>
            </div>
        )
    }
}

function mapStateToProps({questions,users,autheduser}){
    const answers =  Object.keys(users[autheduser].answers)
    const Questions = Object.keys(questions)
    const question = Questions.filter((q) => !answers.includes(q))
    return{
        QuestionId : question
                        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        AnsweredId : answers
    }
}

export default connect(mapStateToProps)(Dashboard)