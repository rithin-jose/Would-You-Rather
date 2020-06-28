import React,{Component} from 'react';
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import {handleUserData} from '../actions/shared'
import {handleQuestionData} from '../actions/shared'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleUserData())
    this.props.dispatch(handleQuestionData())

  }

  render(){
    return (
      <div>
        <Nav/>
        <Dashboard />
      </div>
    )
  }
}

export default connect()(App);
