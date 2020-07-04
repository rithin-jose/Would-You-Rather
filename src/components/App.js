import React,{Component,Fragment} from 'react';
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import Answering from './Answering'
import AddQuestion from './AddQuestion'
import {handleUserData} from '../actions/shared'
import {handleQuestionData} from '../actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleUserData())
    this.props.dispatch(handleQuestionData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Nav/>
          <div>
            <Route path="/" exact component={Login}/>
            <Route path="/add"  component={AddQuestion}/>
            <Route path="/question" exact component={Dashboard}/>
            <Route path="/question/:id"  component={Answering}/>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
