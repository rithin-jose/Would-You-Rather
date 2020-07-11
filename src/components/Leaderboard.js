import React,{Component} from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component{
    render(){
        console.log(this.props.users);
        
        return(
            <div className="row">
            <div className="col s1 m3"></div>
                <div className="center col s10 m6">
                    <div className="card question-card">
                        <div className="content-box">
                            {this.props.users.map((user) => (
                                
                                <div key={user.id} className="col s4 image">
                                    <img
                                    src={user.avatarURL}
                                    className="avatarIcon"
                                    />
                                    <div className="card answer-card">
                                        Number of Questions: {user.questions.length}<br/>
                                        Number of answers: {Object.keys(user.answers).length}<br/>
                                    </div>
                                    <div className="card answer-card green">
                                        Score: {user.questions.length + Object.keys(user.answers).length}<br/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div className="col s1 m6"></div>
        </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Leaderboard)