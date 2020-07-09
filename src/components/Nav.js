import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(               
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="right">Welcome</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>New Question</Link></li>
                    <li><a href="collapsible.html">Leaderboard</a></li>
                </ul>
                </div>
            </nav>   
        )
    }
}

export default Nav