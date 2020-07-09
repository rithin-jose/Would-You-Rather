import React,{Component} from 'react'
import {connect} from 'react-redux'

class Answered extends Component{
    render(){
        const optionOneVote = this.props.optionOne.votes.length
        const optionTwoVote = this.props.optionTwo.votes.length
        const total = (optionOneVote+optionTwoVote)
        const percentOne = (optionOneVote/total)*100
        const percentTwo = (optionTwoVote/total)*100
        console.log(this.props.answerOption);
        
        return(
            <div>
                {
                    this.props.answerOption === 'optionOne' 
                    ?
                        <div>
                        <div className="card answer-card green">
                            {this.props.optionOne.text}<br/>
                            {optionOneVote} Vote out of {total}
                            
                        </div>
                        <div className="card answer-card">
                            {this.props.optionTwo.text}<br/>
                            {optionTwoVote} Vote out of {total}

                        </div>
                        </div>
                    :
                    <div>
                    <div className="card answer-card">
                        {this.props.optionOne.text}<br/>
                        {optionOneVote} Vote out of {total}
                        
                    </div>
                    <div className="card answer-card green">
                        {this.props.optionTwo.text}<br/>
                        {optionTwoVote} Vote out of {total}

                    </div>
                    </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps({questions,users,autheduser},{id}){
    const question = questions[id]
    const optionOne = question.optionOne
    const optionTwo = question.optionTwo
    const answerOption = users[autheduser].answers[id]
    return{
        optionOne,
        optionTwo,
        answerOption,
    }
}

export default connect(mapStateToProps)(Answered)