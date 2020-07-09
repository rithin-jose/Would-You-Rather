import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleAddAnswer} from '../actions/questions'

class Answer extends Component{

    state={
        option:''
    }

    handleOptionOne = () => {
        this.setState({
            option: 'optionOne'
        })
    }

    handleOptionTwo = () => {
        this.setState({
            option: 'optionTwo'
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.option);        
        const answer = this.state.option
        const qid = this.props.id
        const {dispatch} = this.props
        dispatch(handleAddAnswer(qid,answer))
    }

    render(){        
        return(
            <div>
                <span className="bold">Would You Rather?</span><br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input name="answer" type="radio" onChange={this.handleOptionOne}/>
                            <span>{this.props.optionOne.text}</span>
                        </label>
                        <span className="bold"> or </span>
                        <label>
                            <input name="answer" type="radio" onChange={this.handleOptionTwo}/>
                            <span>{this.props.optionTwo.text}</span>
                        </label>
                        <br/><br/>
                        <button
                        className="waves-effect waves-light btn"
                        type="submit"
                        onClick={this.handleSubmit}
                        > 
                        Add Question
                        </button>
                    </form>
                </div>
        )
    }
}

function mapStateToProps({questions},{id}){
    const question = questions[id]
    const optionOne = question.optionOne
    const optionTwo = question.optionTwo
    return{
        optionOne,
        optionTwo,
    }
}

export default connect(mapStateToProps)(Answer)