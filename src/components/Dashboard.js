import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'


class Dashboard extends Component {
    render(){
        return(
            <div className="row">
            <div className="col s1 m3"></div>
                <div className="center col s10 m6">
                    <ul className="tabs">
                        <li className="tab col s6"><a className="active" href="#test1">Unanswered Questions</a></li>
                        <li className="tab col s6"><a href="#test2">Answered Questions</a></li>
                    </ul>
                    {this.props.QuestionId.map((id)=> (
                        <Question id={id}/>  
                    ))}     
                </div>

            <div className="col s1 m6"></div>
        </div>
        )
    }
}

function mapStateToProps({questions}){
    return{
        QuestionId: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp) 
    }
}


export default connect(mapStateToProps)(Dashboard)