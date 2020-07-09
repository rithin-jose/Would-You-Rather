import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

class Newquestion extends Component{
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

        dispatch(handleAddQuestion(optionOneText,optionTwoText))        
        this.setState(() => ({
            optionOneText:'',
            optionTwoText:''
        }))
    }

    render(){        
        return(
            <div className="row">
            <div className="col s1 m3"></div>
                <div className="center col s10 m6">
                    <div className="card question-card">
                            <div className="title">Create a question:</div>
                            <div className="content-box">
                                <div className="col s12 ">
                                    <form >
                                        <span className="bold">Would You Rather?</span><br/>
                                        <label>
                                            <input type="text" value={this.state.optionOneText} name="optionOne" placeholder="option 1" onChange={this.handleChangeOne}/>
                                        </label>                                        
                                                                               
                                        <span className="bold"> or </span>
                                        <label>
                                            <input  type="text" value={this.state.optionTwoText} name="optionTwo" placeholder="option 2" onChange={this.handleChangeTwo}/>
                                        </label> 
                                        <br/><br/>
                                        <button
                                        className="waves-effect waves-light btn"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                        disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
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

export default connect()(Newquestion)