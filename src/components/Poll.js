import React,{Component} from 'react'
import {connect} from 'react-redux'
import Answer from './Answer'
import Answered from './Answered'

class Poll extends Component{
    render(){
        console.log(this.props.user);
        
        return(
            <div className="row">
                <div className="col s1 m3"></div>
                    <div className="center col s10 m6">
                        <div className="card question-card">
                            <div className="title bold">Would You Rather?</div>
                            <div className="content-box">
                                <div className="col s4 image">
                                    <img
                                    src={this.props.user.avatarURL}
                                    className="avatarIcon"
                                    />
                                </div>
                            {
                                this.props.answer.includes(this.props.id)
                                ?
                                    <Answered id={this.props.id}/>
                                :
                                    <Answer id={this.props.id}/>
                            }
                            </div>
                        </div>
                    </div>
                <div className="col s1 m6"></div>
            </div>
        )
    }
}

function mapStateToProps({questions,users,autheduser},props){
    const {id} = props.match.params
    const author = questions[id].author
    return{
        questions,
        id,
        answer:Object.keys(users[autheduser].answers),
        user: users[author],
    }
}

export default connect(mapStateToProps)(Poll)