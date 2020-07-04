import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {  handleSaveQuestion } from '../actions/shared'
import {Redirect} from 'react-router-dom'

class AddQuestion extends Component{
    state={
        optionOneText:'',
        optionTwoText:'',
        toDashboard: false
    }

    handleChangeOne = (e) =>{
        const  optionOneText = e.target.value
        this.setState(() => ({
            optionOneText,
        }))
    }

    handleChangeTwo = (e) =>{
        const  optionTwoText = e.target.value
        this.setState(() => ({
            optionTwoText,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText,optionTwoText} = this.state
        const {dispatch} = this.props

        dispatch(handleSaveQuestion(optionOneText,optionTwoText)) 
        this.setState(() => ({
            optionTwoText:'',
            optionTwoTwo:'',
            toDashboard: true
        }))
    }
    
    render(){
        if(this.state.toDashboard ===true){
            return <Redirect to='/question' />
        }
    
        return(
            <div className="row">
            <div className="col s1 m3"></div>
                <div className="center col s10 m6">
                    <div className="card">
                            <div className="title">Create a question:</div>
                            <div className="content-box">
                                <div className="col s12 ">
                                    <form >
                                        <span className="bold">Would You Rather?</span><br/>
                                        <label>
                                            <input type="text" name="optionOne" onChange={this.handleChangeOne}/>
                                        </label>                                        
                                                                               
                                        <span className="bold"> or </span>
                                        <label>
                                            <input  type="text" name="optionTwo" onChange={this.handleChangeTwo}/>
                                        </label> 
                                        <br/><br/>
                                        <button
                                        className="waves-effect waves-light btn"
                                        onClick={this.handleSubmit}
                                        > 
                                        Add Question
                                        </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            <div className="col s1 m6"></div>
        </div>
            
        )
    }
}

export default connect()(AddQuestion)