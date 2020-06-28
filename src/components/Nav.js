import React,{Component} from 'react';
import autheduser from '../reducers/authedeuser';

class Nav extends Component {
  render(){
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">New Question</a></li>
                    <li><a href="collapsible.html">Leader Board</a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                      {
                        this.props.autheduser !== ''
                        ? <li><a href="sass.html">Home</a></li>
                        : <li><a href="sass.html">nice</a></li>
                      }
                </ul>
            </div>
        </nav>
    )
  }
}

export default Nav;
