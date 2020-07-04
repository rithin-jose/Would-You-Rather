import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'

class Answering extends Component{
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        console.log("QUESTION" , this.props.question.id);
        return(
            <div className="row">
            <div className="col s1 m3"></div>
                <div className="center col s10 m6">
                    <div className="card">
                            <div className="title">{this.props.user.name} asks:</div>
                            <div className="content-box">
                                <div className="col s4 image">
                                    <img
                                    src={this.props.user.avatarURL}
                                    className="avatarIcon"
                                    />
                                </div>
                                <div className="col s8 ">
                                    <form >
                                        <span className="bold">Would You Rather?</span><br/>
                                        <label>
                                            <input type="radio" value="optionOne" name='Poll'/>
                                            <span>{this.props.question.optionOne.text}</span>
                                        </label>                                        
                                                                               
                                        <span className="bold"> or </span>
                                        <label>
                                            <input  type="radio" value="optionTwo" name='Poll'/>
                                            <span>{this.props.question.optionTwo.text}</span>
                                        </label> 
                                        <br/><br/>
                                        <button
                                        className="waves-effect waves-light btn"
                                        onClick={this.handleSubmit}
                                        > 
                                        Answer
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="col s1 m6"></div>
        </div>
            
        )
    }
}

function mapStateToProps({questions,users},props){
    const {id} = props.match.params
    const author = questions[id].author
    return{
        question: questions[id],
        user : users[author.toString()]

    }
}

export default withRouter(connect(mapStateToProps)(Answering))