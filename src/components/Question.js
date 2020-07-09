import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'

class Question extends Component{
    handleSubmit = (e,id) => {
        e.preventDefault()
        this.props.history.push(`/question/${id}`)
    }
    render(){
        return(
            <div className="row">
            <div className="col s12">
                <div className="card question-card">
                        <div className="title">{this.props.user.name} asks:</div>
                        <div className="content-box">
                            <div className="col s4 image">
                                <img
                                src={this.props.user.avatarURL}
                                className="avatarIcon"
                                />
                            </div>
                            <div className="col s8 ">
                                <span className="bold">Would You Rather?</span><br/>
                                {this.props.question.optionOne.text}
                                <span className="bold"> or </span>
                                {this.props.question.optionTwo.text}<br/><br/>
                                <Link to={`/question/${this.props.question.id}`}>
                                    <button className="waves-effect waves-light btn" onClick={(e)=>this.handleSubmit(e,this.props.question.id)}>View Poll</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps({questions,users},{id}){
    const author = questions[id].author
    return{
        question:questions[id],
        user: users[author.toString()]
    }
}

export default withRouter(connect(mapStateToProps)(Question))