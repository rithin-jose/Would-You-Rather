import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Test from './test'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
      <Fragment>
        <Nav/>
        <div>
          {this.props.autheduser === null 
            ?<Route path="/" exact component={Login}/>
            :<Route path="/" exact component={Test}/>
          }
          

          {/* <Route path="/add"  component={AddQuestion}/>
          <Route path="/question" exact component={Dashboard}/>
          <Route path="/question/:id"  component={Answering}/> */}
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