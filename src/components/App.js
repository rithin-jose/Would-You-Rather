import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import Newquestion from './Newquestion'
import Poll from './Poll'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    console.log(this.props.autheduser);
    
    return(
      <Router>
      <Fragment>
        <Nav/>
        <div>
          {this.props.autheduser === null 
            ?<Route path="/" exact component={Login}/>
            :<Route path="/" exact component={Dashboard}/>
          }
          <Route path="/add" exact component={Newquestion}/>
          <Route path="/question/:id" component={Poll}/>
        </div>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps({autheduser}){
  return{
    autheduser,
  }
}

export default connect(mapStateToProps)(App)