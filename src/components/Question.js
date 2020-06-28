import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
    render(){
        console.log(this.props.question);
        return(
            <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="col s4 red">{this.props.question.author}</div>
                    <div className="col s8 green">test</div>
                </div>
            </div>
        </div>
            
        )
    }
}

function mapStateToProps({questions,users},{id}){
    const author = questions[id]
    return{
        question: questions[id],
        user : users[author]

    }
}

export default connect(mapStateToProps)(Question)