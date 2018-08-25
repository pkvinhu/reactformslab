import React, {Component} from 'react'
import TodoForm from './TodoForm'
import axios from 'axios'

export default class UpdateTodo extends Component {
  constructor(props){
  	super(props)
  	this.state={
  	  taskName: '',
  	  assignee: '',
  	  updated: false,
  	  serverError: this.props.serverE
  	}
  	this.handleChange=this.handleChange.bind(this)
  	this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(event) {
  	this.setState({
  	  [event.target.name]: event.target.value
  	})
  }

  handleSubmit(event) {
  	 event.preventDefault()
  	 const id = this.props.todo.id
  	 axios.put(`/api/todos/${id}`, this.state)
  	 .then((res)=>this.props.update(res.data))
  	 .catch(this.setState({serverError:true}))
  	 

  }

  componentDidUpdate(){
  	 if(this.state.updated === false) {
  	 this.setState({
  	 	taskName:this.props.todo.taskName,
  	 	assignee:this.props.todo.assignee,
  	 	updated: true
  	 })
  	}
  }

  render () {
    return (
      <div>
      <TodoForm submit={this.handleSubmit} change ={this.handleChange} name={this.state.taskName} assignee={this.state.assignee} serverE={this.state.serverError}/>
      </div>
    )
  }
}
