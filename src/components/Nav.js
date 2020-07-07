import React,{Component} from 'react'

class Nav extends Component{
    render(){
        return(               
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="right">Welcome</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">New Question</a></li>
                    <li><a href="collapsible.html">Leaderboard</a></li>
                </ul>
                </div>
            </nav>   
        )
    }
}

export default Nav