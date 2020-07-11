import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeAuthedUser} from '../actions/autheduser'
import { handleInitialData } from '../actions/shared'


class Nav extends Component{
    
    handleLogout = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(removeAuthedUser())
    }

    render(){
        return(               
            <nav>
                <div className="nav-wrapper">
                {
                this.props.autheduser === null
                ?<div></div>
                    :<span className="right logout">
                    <img 
                    src={this.props.user.avatarURL}
                    className="avatarIcon2"
                    />
                        Welcome &nbsp;
                    {this.props.user.name}
                    <Link to={"/"}>
                    <button className="waves-effect waves-light btn" onClick={(e) => this.handleLogout(e)}>
                        Logout
                    </button>
                    </Link>
                    </span>
                }
        
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>New Question</Link></li>
                    <li><Link to='/leaderboard'>Leaderboard</Link></li>
                </ul>
                </div>
            </nav>   
        )
    }
}

function mapStateToProps({users,autheduser}){
    const user = users[autheduser]
    return{
        user,
        autheduser,
    }
}

export default connect(mapStateToProps)(Nav)