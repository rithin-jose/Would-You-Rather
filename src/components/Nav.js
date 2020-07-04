import React,{Component} from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render(){
    console.log(this.props.user);
    
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                      <NavLink to='/question' exact ClassName='active'>
                        Home
                      </NavLink>
                    </li>
                    <li><NavLink to='/add' exact >
                        New Question
                      </NavLink></li>
                    <li><a href="collapsible.html">Leader Board</a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                      {
                        this.props.autheduser == null
                        ? <li></li>
                      : <li>
                        <img
                        src={this.props.user.avatarURL}
                        className="avatarIcon2"
                        ></img>
                          Welcome
                          {this.props.user.name}
                         </li>
                      }
                </ul>
            </div>
        </nav>
    )
  }
}

function mapStatesToProps({autheduser,users}){
  const loggedin = autheduser !== null ? users[autheduser.currentUser.toString()] : {}
  return{
    autheduser,
    user : loggedin
  }
}

export default connect(mapStatesToProps)(Nav);
