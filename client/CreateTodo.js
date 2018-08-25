import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default class CreateTodo extends Component {
  constructor (props) {
  	super(props)
  	this.state = {
  	  taskName: '',
  	  assignee: '',
  	  serverError: this.props.serverE
  	}
  	this.handleChange=this.handleChange.bind(this)
  	this.handleSubmit=this.handleSubmit.bind(this)
  	// this.createATodo=this.createATodo.bind(this)
  }

  // componentDidMount(){
  // 	axios.get('/api/')
  // }

  // async createATodo (){

  // }

  handleChange(event) {
  	this.setState({
  	  [event.target.name]: event.target.value
  	})
  }

  handleSubmit(event) {
  	 event.preventDefault()
	 axios.post('/api/todos', this.state)
  	 .then((res)=>this.add(res.data))
  	 .catch(this.setState({serverError:true}))
  	 this.setState({
  	 taskName: '',
  	 assignee: ''
  	})
  }

  render () {
    return (
      <div>
      <TodoForm submit={this.handleSubmit} change ={this.handleChange} name={this.state.taskName} assignee={this.state.assignee} serverE={this.state.serverError}/>
      </div>
    )
  }
}
